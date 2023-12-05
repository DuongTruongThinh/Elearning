import React from "react";

export default function FromTheBlogsComponent() {
  return (
    <div
      className="py-8 bg-[#f5f7fa]"
      style={{ borderBottom: "2px solid rgb(233, 237, 242)" }}
    >
      <div className="page-container">
        <div className="from-the-blogs flex relative mb-4 h-6 z-[1]">
          <div
            className="uppercase pr-1 absolute font-medium text-[15px] text-[#303840] bg-[#f5f7fa] z-[3]"
            style={{ fontFamily: "system-ui", letterSpacing: "3px" }}
          >
            From the blog
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="pr-6">
            <div className="col-span-1 flex relative mb-5">
              <div
                className="flex "
                style={{
                  boxShadow:
                    "0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)",
                }}
              >
                <img
                  src="https://luma.humatheme.com/public/images/paths/sketch_430x168.png"
                  className="h-48 object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="absolute top-0 bottom-0 bg-[#5567ff] opacity-50 left-0 right-0 rounded-lg"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="flex justify-between px-4 py-4">
                  <div className="w-[26px] h-[26px] text-[.54167rem]">
                    <a href="">
                      <img
                        src="https://luma.humatheme.com/public/images/256_luke-porter-261779-unsplash.jpg"
                        style={{
                          border: "2px solid #fff",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                    </a>
                  </div>
                  <a
                    href=""
                    className="flex items-center text-[white] justify-center"
                  >
                    <i class="material-icons mr-1 text-[14px]">
                      remove_red_eye
                    </i>
                    <small>327</small>
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <small
                      className="uppercase text-[#ffffff8a] text-[13px]"
                      style={{ lineHeight: "1.5" }}
                    >
                      sketch
                    </small>
                    <a href="" className="flex text-white font-medium">
                      <i>Merge Duplicates Inconsistent Symbols</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3">
            <div className="col-span-1 flex relative">
              <div
                className="flex "
                style={{
                  boxShadow:
                    "0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)",
                }}
              >
                <img
                  src="https://luma.humatheme.com/public/images/paths/invision_430x168.png"
                  className="h-48 object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="absolute top-0 bottom-0 bg-[#5567ff] opacity-50 left-0 right-0 rounded-lg"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="flex justify-between px-4 py-4">
                  <div className="w-[26px] h-[26px] text-[.54167rem]">
                    <a href="">
                      <img
                        src="https://luma.humatheme.com/public/images/256_michael-dam-258165-unsplash.jpg"
                        style={{
                          border: "2px solid #fff",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                    </a>
                  </div>
                  <a
                    href=""
                    className="flex items-center text-[white] justify-center"
                  >
                    <i class="material-icons mr-1 text-[14px]">
                      remove_red_eye
                    </i>
                    <small>327</small>
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <small
                      className="uppercase text-[#ffffff8a] text-[13px]"
                      style={{ lineHeight: "1.5" }}
                    >
                      INVISION
                    </small>
                    <a href="" className="flex text-white font-medium">
                      <i>Design Systems Essentials</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-6">
            <div className="col-span-1 flex relative">
              <div
                className="flex "
                style={{
                  boxShadow:
                    "0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)",
                }}
              >
                <img
                  src="https://luma.humatheme.com/public/images/paths/photoshop_430x168.png"
                  className="h-48 object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="absolute top-0 bottom-0 bg-[#5567ff] opacity-50 left-0 right-0 rounded-lg"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="flex justify-between px-4 py-4">
                  <div className="w-[26px] h-[26px] text-[.54167rem]">
                    <a href="">
                      <img
                        src="https://luma.humatheme.com/public/images/256_rsz_1andy-lee-642320-unsplash.jpg"
                        style={{
                          border: "2px solid #fff",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                    </a>
                  </div>
                  <a
                    href=""
                    className="flex items-center text-[white] justify-center"
                  >
                    <i class="material-icons mr-1 text-[14px]">
                      remove_red_eye
                    </i>
                    <small>327</small>
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <small
                      className="uppercase text-[#ffffff8a] text-[13px]"
                      style={{ lineHeight: "1.5" }}
                    >
                      PHOTOSHOP
                    </small>
                    <a href="" className="flex text-white font-medium">
                      <i>Semantic Logo Design</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex p-2 items-center bg-white rounded-lg"
          style={{
            boxShadow:
              "0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)",
          }}
        >
          <div className="mr-4 h-16 w-16">
            <a href="">
              <img
                className="w-full h-full rounded"
                src="https://luma.humatheme.com/public/images/paths/invision_200x168.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-col w-[35%]">
            <i className="font-medium">
              <a href="">Design Systems Essentials</a>
            </i>
            <small className="text-[#272c3380]">35 views last week</small>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex mr-4 text-[#272c3380] text-[13px]">
              <i class="material-icons text-muted-light mr-1">folder_open</i>
              <p className="uppercase">inVision</p>
            </div>
            <div className="flex mr-4 text-[#272c3380]">
              <small>11 Nov, 2018 07:46 AM</small>
            </div>
            <div className="flex ">
              <div className="flex mr-[-8px]">
                <div className="h-[26px] w-[26px]">
                  <img
                    className="w-full h-full rounded-[50%]"
                    style={{ border: "2px solid #fff" }}
                    src="https://luma.humatheme.com/public/images/256_rsz_1andy-lee-642320-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="h-[26px] w-[26px]">
                  <img
                    className="w-full h-full rounded-[50%] ml-[-0.40625rem]"
                    style={{ border: "2px solid #fff" }}
                    src="https://luma.humatheme.com/public/images/256_michael-dam-258165-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="h-[26px] w-[26px]">
                  <img
                    className="w-full h-full rounded-[50%] ml-[-0.81250rem]"
                    style={{ border: "2px solid #fff" }}
                    src="https://luma.humatheme.com/public/images/256_luke-porter-261779-unsplash.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[#272c3380] text-[13px] font-semibold"
                >
                  +2 more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
