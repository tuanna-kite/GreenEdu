import { MemberImageProps } from "../screens/home/component/MemberImage";
import { IData } from "../types";

export const headerSlideData: MemberImageProps[] = [
  { name: "slideimg", image: require("../assets/slide1.png") },
  { name: "slideimg", image: require("../assets/slide1.png") },
  { name: "slideimg", image: require("../assets/slide1.png") },
];

export interface IObjectData {
  [key: string]: IData;
}

export const basic: IObjectData = {
  1: {
    id: 1,
    image: require("../assets/env/pollution1.png"),
    title: "Ô nhiễm đất",
    description:
      "Tình trạng mà môi trường sống của chúng ta bị ô nhiễm và suy giảm chất lượng do sự tồn tại của các chất gây ô nhiễm",
  },
  2: {
    id: 2,
    image: require("../assets/env/pollution2.png"),
    title: "Ô nhiễm nước",
    description:
      "Bao gồm việc ô nhiễm các nguồn nước như sông, ao hồ và nguồn nước ngầm bởi các chất gây ô nhiễm như chất hóa học, chất thải công nghiệp và nông nghiệp, và vi khuẩn từ nước thải.",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm nước",
        body: [
          "Nguồn tự nhiên: Bao gồm các yếu tố như xói mòn đất, núi lửa, và hiện tượng tự nhiên khác có thể gây ô nhiễm nước.",
          "Nguồn nhân tạo: Chủ yếu bao gồm các hoạt động công nghiệp, nông nghiệp, và sinh hoạt của con người. Ví dụ, nước thải từ nhà máy, hóa chất từ nông nghiệp, và rác thải sinh hoạt.",
        ],
        image: require("../assets/env/water-pollution1.png"),
      },
      {
        title: "Nguồn gốc của ô nhiễm nước",
        body: [
          "Chất hữu cơ: Bao gồm các hợp chất hóa học có chứa carbon, ví dụ như dầu mỡ, thuốc trừ sâu, và các chất thải sinh học.",
          "Chất vô cơ: Bao gồm các kim loại nặng như chì, thủy ngân, và cadmium, cũng như các hợp chất hóa học khác như nitrat và phosphat.",
        ],
        image: require("../assets/env/water-pollution2.png"),
      },
      // TODO: hoan thien not noi dung
    ],
  },
  3: {
    id: 3,
    image: require("../assets/env/pollution3.png"),
    title: "Ô nhiễm tiếng ồn",
    description:
      "Là sự phát ra của các âm thanh không mong muốn hoặc quá lớn từ các nguồn như giao thông, công trình xây dựng, và công nghiệp, có thể gây ra căng thẳng và ảnh hưởng đến sức khỏe tinh thần và thể chất.",
  },
  4: {
    id: 4,
    image: require("../assets/env/pollution4.png"),
    title: "Ô nhiễm không khí",
    description:
      "Đây là hiện trang không khí bị ô nhiễm bởi mùi hôi thối, bụi bẩn…",
  },
  5: {
    id: 5,
    image: require("../assets/env/pollution5.png"),
    title: "Ô nhiễm ánh sáng",
    description:
      "Đây là hiện tượng ánh quá mức khiến cuộc sống của động thực vật cũng như con người bị ảnh hưởng.",
  },
  6: {
    id: 6,
    image: require("../assets/env/pollution6.png"),
    title: "Ô nhiễm tầm nhìn",
    description:
      "Là hiện tượng rác thải, các vật dụng được xả ra môi trường tự nhiên một cách phản logic. Chúng khiến mất mỹ quan đô thị, làm khó chịu cho người nhìn.",
  },
};
export const story: IObjectData = {
  1: {
    id: 1,
    title: "Trách nhiệm của học sinh trong việc bảo vệ môi trường sống",
    description:
      "Tình trạng mà môi trường sống của chúng ta bị ô nhiễm và suy giảm chất lượng do sự tồn tại của các chất gây ô nhiễm",
    image: require("../assets/env/story1.png"),
  },
  2: {
    id: 2,
    title: "Phong trào em yêu môi trường xanh",
    description:
      "Bao gồm việc ô nhiễm các nguồn nước như sông, ao hồ và nguồn nước ngầm bởi các chất gây ô nhiễm như chất hóa học, chất thải công nghiệp và nông nghiệp, và vi khuẩn từ nước thải.",
    image: require("../assets/env/story2.png"),
  },
};

export interface IActivity {
  id: number;
  title: string;
  target: string;
  image: string;
  material: string[];
  instructions: Array<{
    title: string;
    body: string;
  }>;
  benefit: string[];
}

export interface IObjectActivity {
  [key: string]: IActivity;
}

export const activity: IObjectActivity = {
  1: {
    id: 1,
    title: "Tự làm bình hoa",
    target: "Học sinh",
    image: "",
    material: ["Hoa", "Vỏ chai", "Đất", "Nước", "Cây", "Cây cảnh"],
    instructions: [
      {
        title: "Bước 1: Chuẩn bị",
        body: "Chuẩn bị các nguyên liệu cần thiết",
      },
      {
        title: "Bước 2: Trồng cây",
        body: "Trồng cây vào trong bình",
      },
      {
        title: "Bước 3: Cắm hoa",
        body: "Cắm hoa vào bình",
      },
      {
        title: "Bước 4: Đổ nước",
        body: "Đổ nước vào bình",
      },
    ],
    benefit: [
      "Học sinh sẽ biết cách chăm sóc cây cảnh",
      "Học sinh sẽ biết cách làm hoa",
    ],
  },
};
