import { useEffect } from "react";
import Card from "../components/Card";
import AddContentModal from "../components/modals/AddContentModal";
import BrainShareModal from "../components/modals/BrainShareModal";
import ShareComponentModal from "../components/modals/ShareComponentModal";
import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";
import {
  useAddModalStore,
  useAllContentsStore,
  useBrainShareModalStore,
  useShareModalStore,
} from "../Store/store";

export default function Dashboard() {
  const addmodal = useAddModalStore((state) => state.isOpen);
  const toggleAdd = useAddModalStore((state) => state.toggleModal);

  const sharemodal = useShareModalStore((state) => state.isOpen);
  const toggleShare = useShareModalStore((state) => state.toggleModal);

  const brainmodal = useBrainShareModalStore((state) => state.isOpen);
  const toggleBrain = useBrainShareModalStore((state) => state.toggleModal);

  const { contents, fetchContent, loading } = useAllContentsStore();

  useEffect(() => {
    fetchContent();

    let interval = setInterval(() => {
      fetchContent();
      console.log("refreshing");
      
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Navbar toggleModal={toggleBrain} />
      <Sidebar toggleModal={toggleAdd} />

      {loading && contents.length === 0 ? (
        <div className="main ml-64 pt-14 bg-zinc-50 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600">Loading your content...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="main ml-64 pt-14 bg-zinc-50 min-h-screen">
            <div className="inside p-5">
              <div className="title mb-5">
                <p className="text-xl font-medium text-zinc-800">All Content</p>
                <p className="text-sm text-zinc-600">{contents.length} items</p>
              </div>
              <div className="card">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-4">
                  {contents.map((content) => (
                    <Card
                      key={content._id}
                      content={content}
                      onShare={toggleShare}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ShareComponentModal
            link="http://"
            open={sharemodal}
            onClose={toggleShare}
          />
          <BrainShareModal
            link="http://"
            open={brainmodal}
            onClose={toggleBrain}
          />
          <AddContentModal open={addmodal} onClose={toggleAdd} />
        </>
      )}
    </>
  );
}
