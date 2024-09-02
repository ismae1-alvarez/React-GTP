import Markdown from "react-markdown"


type GptMessageProps = {
    text: string;
};

export const GptMessage = ({ text }:GptMessageProps) => {
  return (
    <>
        <div className="col-start-1 col-end-9 p-5 rounded-lg">
            <div className="flex flex-row items-start ">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0">
                    G
                </div>
                <div className="relative ml-3 text-center bg-black bg-opacity-25 pt-3 pb-2 px-3 shadow rounded-xl">
                    <Markdown>{ text }</Markdown>
                </div>
            </div>
        </div>
    </>
  )
}