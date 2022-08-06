import React from "react";

//Component
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilters/PlayFilters.component";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full lg:flex lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 " >
            <h2 className="text-2xl text-gray-700 font-bold mb-4">
              Play in NCR Chennai
            </h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314340-ksqaevnmzt-portrait.jpg"
                  title="Chennai Art Theatre Presents Ramses"
                  subtitle="Watch on BookMy Show"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                  title="Tvk Cultural presents Ponniyin Selvan"
                  subtitle="Watch on BookMy Show"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314526-vhjdbqsypy-portrait.jpg"
                  title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                  subtitle="Watch on BookMy Show"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg"
                  title="Ranga Shankara"
                  subtitle="Watch on BookMy Show"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314340-ksqaevnmzt-portrait.jpg"
                  title="Chennai Art Theatre Presents Ramses"
                  subtitle="Watch on BookMy Show"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314526-vhjdbqsypy-portrait.jpg"
                  title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                  subtitle="Watch on BookMy Show"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                  title="Tvk Cultural presents Ponniyin Selvan"
                  subtitle="Watch on BookMy Show"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314526-vhjdbqsypy-portrait.jpg"
                  title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                  subtitle="Watch on BookMy Show"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 p-4 bg-white  rounded-xl">
            <h2 className="text-2xl text-gray-700 font-bold mb-4"> Filters </h2>
            <div>
              <PlayFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilter
                title="Language"
                tags={["Tamil", "English", "Telugu"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
