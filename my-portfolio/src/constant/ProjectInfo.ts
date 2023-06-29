export class Project {
  name: string = "";
  startDate: string = "";
  endDate: string = "";
  type: string = "";
  url: string = "";
  imgURL: string = "";
  constructor(
    name: string = "",
    startDate: string = "",
    endDate: string = "",
    type: string = "",
    url: string = "",
    imgURL: string = ""
  ) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.type = type;
    this.url = url;
    this.imgURL = imgURL;
  }
}

const healthOne =
  "헬스원(HealthOne),2023-04-10,2023-05-19,Android,https://www.notion.so/HealthOne-1ed8357ce1d94b2590fccaae610b4e4b,https://github.com/1-Hee/healthone/raw/main/assets/healthone-concept.jpg".split(
    ","
  );
const soboro =
  "소보로(SOBORO),2023-02-20,2023-04-07,Android,https://www.notion.so/SOBORO-cbe08d4dcfe04646930d100ba239337b,https://github.com/1-Hee/soboro/raw/main/asset/soboro-banner.jpg".split(
    ","
  );
const oneday =
  "하루 1분 수학 본능,2022-12-19,2022-12-21,Android,https://www.notion.so/1-One-Day-Math-474c0c5d23474a6ea5248bc382684426,https://github.com/1-Hee/onedaymath/raw/master/assets/oneday_mobile1.jpg".split(
    ","
  );
const flos =
  "FLOS,2023-01-02,2023-02-17,Web-Application,https://www.notion.so/FLOS-d9358215b8084134a61c664002d931fe,https://github.com/1-Hee/flos/raw/main/assets/flos-concept.jpg".split(
    ","
  );
const sweetHome =
  "SweetHome,2022-11-07,2022-11-25,Web-Application,https://www.notion.so/SweetHome-b9a4daf03ed843d3bb7e4fbdb2ad00ba,https://user-images.githubusercontent.com/79094527/210575621-b45c14fa-aec0-4b54-9512-ab5b6649be00.png".split(
    ","
  );

export const pjtInfos: Array<Project> = [
  new Project(healthOne[0], healthOne[1], healthOne[2], healthOne[3], healthOne[4], healthOne[5]),
  new Project(soboro[0], soboro[1], soboro[2], soboro[3], soboro[4], soboro[5]),
  new Project(oneday[0], oneday[1], oneday[2], oneday[3], oneday[4], oneday[5]),
  new Project(flos[0], flos[1], flos[2], flos[3], flos[4], flos[5]),
  new Project(sweetHome[0], sweetHome[1], sweetHome[2], sweetHome[3], sweetHome[4], sweetHome[5]),
];
