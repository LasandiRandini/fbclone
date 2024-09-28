import StoryReel from "./StoryReel";
import InputBox from "./InputBox";

function Feed() {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mx-auto overflow-y-auto bg-gray-50">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-4xl">
                {/* Story Reel */}
                <StoryReel />
                <InputBox />
                {/* Placeholders for other components */}
                {/* <MessageSender /> */}
                {/* <Post /> */}
            </div>
        </div>
    );
}

export default Feed;
