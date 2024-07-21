import { MemberImageProps } from "../screens/home/component/MemberImage";
import { IData } from "../types";

export enum EDataType {
  BASIC,
  STORY,
  ACTIVITY,
}

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
    content: [
      {
        title: "Nguồn gốc ảnh hưởng đến ô nhiễm đất",
        body: [
          "Công nghiệp: Các nhà máy sản xuất thường xuyên xả khí thải và chất thải ra môi trường, gây ô nhiễm đất bởi các hóa chất độc hại như kim loại nặng, chất độc hại từ quá trình sản xuất.",
          "Nông nghiệp: Sử dụng phân bón hóa học và thuốc trừ sâu không an toàn có thể làm tăng nồng độ các chất hóa học độc hại trong đất.",
          "Xây dựng và phát triển đô thị: Các hoạt động xây dựng có thể làm thay đổi cấu trúc đất, làm giảm tính hấp thụ và làm mất cân bằng môi trường sống của động thực vật.",
          "Văn phòng: Các chất thải từ môi trường chất xây dựng để environment ch quyền đô have diritto.",
        ],
        image: require("../assets/env/noise1.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm đất:",
        body: [
          "Môi trường: Ô nhiễm đất có thể làm thay đổi cấu trúc đất và làm mất cân bằng sinh thái của các hệ sinh thái đất. Nó cũng có thể làm giảm đa dạng sinh học và số lượng các loài động vật và thực vật trong môi trường đất.",
          "Sức khỏe con người: Các chất độc hại trong đất có thể xuyên qua chu trình thực phẩm và nước uống, gây ra các vấn đề sức khỏe nghiêm trọng như độc tính cho gan, ung thư, và ảnh hưởng đến hệ thần kinh và nội tiết của con người.",
          "Sự sản xuất nông nghiệp: Ô nhiễm đất có thể làm giảm hiệu suất sản xuất nông nghiệp do các chất độc hại làm hại đến cây trồng và động vật nuôi.",
        ],
        image: require("../assets/env/noise3.jpg"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm tiếng ồn:",
        body: [
          "Sử dụng hợp lý phân bón và thuốc trừ sâu: Lựa chọn các loại phân bón hữu cơ và thuốc trừ sâu không độc hại để giảm thiểu tác động xấu lên đất và môi trường.",
          "Quản lý chất thải: Xử lý và tái chế chất thải một cách hiệu quả để ngăn chặn các chất độc hại từ việc xả thải vào đất.",
          "Kiểm soát nước thải: Đảm bảo hệ thống thoát nước và xử lý nước thải từ các nguồn công nghiệp và gia đình để tránh xả nước thải ô nhiễm vào môi trường.",
          "Bảo vệ vùng đất xanh: Bảo vệ và duy trì các vùng đất xanh tự nhiên, giảm thiểu hoặc ngăn chặn việc phá rừng, phá hoại môi trường tự nhiên.",
        ],
        image: require("../assets/env/noise4.jpg"),
      },
    ],
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
        image: require("../assets/env/water1.png"),
      },
      {
        title: "Các loại chất ô nhiễm:",
        body: [
          "Chất hữu cơ: Bao gồm các hợp chất hóa học có chứa carbon, ví dụ như dầu mỡ, thuốc trừ sâu, và các chất thải sinh học.",
          "Chất vô cơ: Bao gồm các kim loại nặng như chì, thủy ngân, và cadmium, cũng như các hợp chất hóa học khác như nitrat và phosphat.",
          "Vi sinh vật: Bao gồm vi khuẩn, virus, và ký sinh trùng có thể gây bệnh cho con người và động vật.",
          "Chất phóng xạ: Bao gồm các đồng vị phóng xạ từ hoạt động công nghiệp, y tế và quân sự.",
        ],
        image: require("../assets/env/water2.png"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm nước",
        body: [
          "Sức khỏe con người: Ô nhiễm nước có thể gây ra nhiều bệnh tật như bệnh tiêu chảy, viêm gan, và các bệnh lây nhiễm qua đường nước khác.",
          "Hệ sinh thái: Ô nhiễm nước làm giảm đa dạng sinh học, gây chết hàng loạt động vật và thực vật trong các hệ sinh thái nước ngọt và biển.",
          "Kinh tế: Ảnh hưởng đến ngành công nghiệp du lịch, nuôi trồng thủy sản, và nguồn cung cấp nước sạch, gây thiệt hại kinh tế lớn.",
          "Xã hội: Gây bất ổn xã hội, ảnh hưởng đến chất lượng cuộc sống và gây ra các xung đột về nguồn nước.",
        ],
        image: require("../assets/env/water3.png"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm nước",
        body: [
          "Quản lý nguồn nước: Xây dựng các hệ thống quản lý nước hiệu quả, bảo vệ các nguồn nước tự nhiên.",
          "Xử lý nước thải: Sử dụng công nghệ xử lý nước thải tiên tiến để loại bỏ các chất ô nhiễm trước khi xả ra môi trường.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền, giáo dục cộng đồng về tác hại của ô nhiễm nước và khuyến khích các hành vi bảo vệ môi trường.",
          "Chính sách và pháp luật: Áp dụng các chính sách và quy định nghiêm ngặt về bảo vệ môi trường, xử phạt nghiêm minh các hành vi gây ô nhiễm nước.",
        ],
        image: require("../assets/env/water4.png"),
      },
    ],
  },
  3: {
    id: 3,
    image: require("../assets/env/pollution3.png"),
    title: "Ô nhiễm tiếng ồn",
    description:
      "Là sự phát ra của các âm thanh không mong muốn hoặc quá lớn từ các nguồn như giao thông, công trình xây dựng, và công nghiệp, có thể gây ra căng thẳng và ảnh hưởng đến sức khỏe tinh thần và thể chất.",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm tiếng ồn",
        body: [
          "Giao thông: Bao gồm tiếng ồn từ xe cộ, xe lửa, máy bay, và tàu thuyền. Đây là nguồn ô nhiễm tiếng ồn phổ biến nhất, đặc biệt ở các khu vực đô thị.",
          "Công nghiệp: Các nhà máy, xưởng sản xuất, và công trường xây dựng thường tạo ra tiếng ồn lớn do máy móc và hoạt động sản xuất.",
          "Hoạt động thương mại và giải trí: Bao gồm tiếng ồn từ các khu vui chơi giải trí, nhà hàng, quán bar, và các hoạt động thương mại khác.",
          "Sinh hoạt hàng ngày: Tiếng ồn từ các hoạt động hàng ngày như tiệc tùng, thiết bị gia dụng, và động vật nuôi.",
        ],
        image: require("../assets/env/noise1.jpg"),
      },
      {
        title: "Các loại tiếng ồn:",
        body: [
          "Tiếng ồn liên tục: Tiếng ồn duy trì liên tục trong một khoảng thời gian dài, như tiếng ồn từ máy lạnh, quạt, hoặc giao thông.",
          "Tiếng ồn xung: Tiếng ồn xảy ra đột ngột và kéo dài trong một khoảng thời gian ngắn, như tiếng nổ, tiếng va đập, hoặc tiếng còi xe.",
          "Tiếng ồn tần số thấp: Tiếng ồn có tần số thấp hơn 250 Hz, thường đến từ các máy móc công nghiệp lớn hoặc hệ thống thông gió.",
          "Tiếng ồn tần số cao: Tiếng ồn có tần số cao hơn 2000 Hz, như tiếng hú của còi xe cứu thương hoặc tiếng chói tai từ thiết bị điện tử.",
        ],
        image: require("../assets/env/noise2.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm tiếng ồn:",
        body: [
          "Sức khỏe con người: Ô nhiễm tiếng ồn có thể gây ra các vấn đề về thính lực, stress, mất ngủ, tăng huyết áp, và các vấn đề tim mạch.",
          "Hệ sinh thái: Tiếng ồn có thể ảnh hưởng đến hành vi và sức khỏe của động vật, làm gián đoạn giao tiếp, săn mồi, và di cư của các loài động vật.",
          "Kinh tế: Chi phí cho việc điều trị các bệnh liên quan đến tiếng ồn và giảm năng suất lao động do mất ngủ và stress.",
          "Xã hội: Ô nhiễm tiếng ồn ảnh hưởng đến chất lượng cuộc sống, gây ra căng thẳng xã hội và mâu thuẫn giữa các cộng đồng.",
        ],
        image: require("../assets/env/noise3.jpg"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm tiếng ồn:",
        body: [
          "Quy hoạch đô thị: Xây dựng các khu dân cư cách xa các nguồn gây tiếng ồn, tạo ra các vùng đệm cây xanh để giảm tiếng ồn.",
          "Công nghệ và thiết kế: Sử dụng vật liệu cách âm trong xây dựng, phát triển và sử dụng các thiết bị và phương tiện ít gây tiếng ồn.",
          "Chính sách và quy định: Áp dụng các quy định về mức độ tiếng ồn cho phép, kiểm soát tiếng ồn từ các nguồn công nghiệp và giao thông.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền về tác hại của ô nhiễm tiếng ồn và khuyến khích các hành vi giảm thiểu tiếng ồn trong cộng đồng.",
        ],
        image: require("../assets/env/noise4.jpg"),
      },
    ],
  },
  4: {
    id: 4,
    image: require("../assets/env/pollution4.png"),
    title: "Ô nhiễm không khí",
    description:
      "Ô nhiễm không khí là sự thay đổi lớn trong thành phần của không khí, chủ yếu do khói, bụi, hơi hoặc các khí lạ được đưa vào không khí, có sự tỏa mùi, làm giảm tầm nhìn xa, gây biến đổi khí hậu, gây bệnh cho con người",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm không khí:",
        body: [
          "Nguồn tự nhiên: Bao gồm các hiện tượng tự nhiên như núi lửa phun trào, cháy rừng, và bão bụi.",
          "Nguồn nhân tạo: Chủ yếu do các hoạt động của con người như công nghiệp, giao thông vận tải, nông nghiệp, và sinh hoạt hàng ngày. Ví dụ, khí thải từ nhà máy, xe cộ, và đốt nhiên liệu hóa thạch.",
        ],
        image: require("../assets/env/air1.jpg"),
      },
      {
        title: "Các loại chất ô nhiễm không khí",
        body: [
          "Chất ô nhiễm sơ cấp: Các chất này được thải trực tiếp vào không khí từ nguồn gây ô nhiễm, bao gồm:Carbon monoxide (CO),Sulfur dioxide (SO₂),Nitrogen oxides (NOₓ),Particulate matter (PM),Volatile organic compounds (VOCs)",
          "Chất ô nhiễm thứ cấp: Các chất này được hình thành trong không khí thông qua phản ứng hóa học của các chất ô nhiễm sơ cấp, bao gồm:Ozone (O₃),Smog (khói quang hóa)",
        ],
        image: require("../assets/env/air2.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm không khí:",
        body: [
          "Sức khỏe con người: Ô nhiễm không khí gây ra nhiều bệnh lý nghiêm trọng như bệnh hô hấp (hen suyễn, viêm phổi), bệnh tim mạch, và ung thư phổi. Nó cũng làm suy giảm hệ miễn dịch và gây ra các vấn đề về sinh sản.",
          "Môi trường: Ô nhiễm không khí ảnh hưởng đến sự phát triển của thực vật, làm giảm đa dạng sinh học, và gây ra hiện tượng mưa axit, làm hại đất và nguồn nước.",
          "Kinh tế: Chi phí cho chăm sóc y tế tăng cao do các bệnh liên quan đến ô nhiễm không khí, giảm năng suất lao động và thiệt hại về tài nguyên thiên nhiên.",
          "Xã hội: Ảnh hưởng đến chất lượng cuộc sống, gây ra sự bất mãn xã hội và tác động tiêu cực đến du lịch và các hoạt động ngoài trời.",
        ],
        image: require("../assets/env/air3.jpg"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm không khí:",
        body: [
          "Chính sách và quy định: Áp dụng các tiêu chuẩn về khí thải và chất lượng không khí, kiểm soát nghiêm ngặt việc phát thải từ các nguồn công nghiệp và giao thông.",
          "Công nghệ và cải tiến kỹ thuật: Phát triển và sử dụng các công nghệ sạch, như hệ thống lọc bụi, công nghệ đốt nhiên liệu hiệu quả và phương tiện giao thông thân thiện với môi trường.",
          "Năng lượng tái tạo: Khuyến khích sử dụng năng lượng tái tạo như năng lượng mặt trời, gió, và thủy điện để giảm thiểu phát thải từ việc đốt nhiên liệu hóa thạch.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền về tác hại của ô nhiễm không khí và khuyến khích cộng đồng tham gia vào các hoạt động bảo vệ môi trường.",
        ],
        image: require("../assets/env/air4.jpg"),
      },
    ],
  },
  5: {
    id: 5,
    image: require("../assets/env/pollution5.png"),
    title: "Ô nhiễm ánh sáng",
    description:
      "Ô nhiễm ánh sáng xảy ra do sự hiện diện những hành động của con người và các loại hình ánh sáng nhân tạo trong môi trường ban đêm",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm ánh sáng",
        body: [
          "Ánh sáng đô thị: Bao gồm đèn đường, biển quảng cáo, ánh sáng từ tòa nhà cao tầng và khu thương mại. Các khu đô thị phát triển mạnh là nguồn chính gây ô nhiễm ánh sáng.",
          "Khu công nghiệp: Các nhà máy và xí nghiệp thường sử dụng ánh sáng mạnh để hoạt động ban đêm, góp phần vào ô nhiễm ánh sáng.",
          "Khu dân cư: Ánh sáng từ các khu dân cư, đèn vườn, đèn sân chơi, và các thiết bị chiếu sáng khác cũng gây ra ô nhiễm ánh sáng.",
          "Hoạt động giải trí: Các sự kiện thể thao ban đêm, concert, và các hoạt động giải trí ngoài trời sử dụng đèn chiếu sáng mạnh cũng là nguồn ô nhiễm ánh sáng.",
        ],
        image: require("../assets/env/light2.jpg"),
      },
      {
        title: "Các loại ô nhiễm ánh sáng:",
        body: [
          "Chói sáng (Glare): Ánh sáng quá mạnh gây khó chịu hoặc làm mất khả năng nhìn rõ. Thường xảy ra do đèn đường, biển quảng cáo.",
          "Ánh sáng xâm nhập (Light Trespass): Ánh sáng không mong muốn chiếu vào khu vực không cần chiếu sáng, như ánh sáng đèn đường vào cửa sổ nhà ở.",
          "Sáng nền (Skyglow): Hiện tượng bầu trời bị chiếu sáng bởi ánh sáng nhân tạo, làm giảm khả năng nhìn thấy các ngôi sao và thiên thể vào ban đêm.",
          "Ánh sáng rối (Clutter): Sự tập trung của nhiều nguồn ánh sáng không cần thiết, gây rối mắt và khó chịu.",
        ],
        image: require("../assets/env/light2.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm ánh sáng:",
        body: [
          "Sức khỏe con người: Ô nhiễm ánh sáng có thể gây rối loạn giấc ngủ, dẫn đến các vấn đề về sức khỏe như stress, mệt mỏi, và các bệnh liên quan đến giấc ngủ. Ánh sáng ban đêm còn ảnh hưởng đến nhịp sinh học và hormone melatonin.",
          "Động vật và hệ sinh thái: Ảnh hưởng đến hành vi của động vật, gây rối loạn di cư, săn mồi và sinh sản. Ví dụ, chim di cư bị lạc đường do ánh sáng nhân tạo, rùa con không thể tìm đường ra biển.",
          "Thiên văn học: Ánh sáng nền làm giảm khả năng quan sát thiên văn, gây khó khăn cho các nhà thiên văn học và người yêu thích quan sát bầu trời đêm.",
          "Kinh tế: Chi phí năng lượng tăng cao do sử dụng ánh sáng không hiệu quả. Ô nhiễm ánh sáng cũng có thể làm giảm giá trị bất động sản trong các khu vực bị ảnh hưởng.",
        ],
        image: require("../assets/env/light3.png"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm ánh sáng:",
        body: [
          "Quy hoạch đô thị: Thiết kế hệ thống chiếu sáng hợp lý, sử dụng đèn có hướng chiếu sáng phù hợp để giảm ánh sáng xâm nhập và chói sáng.",
          "Công nghệ và thiết kế: Sử dụng vật liệu cách âm trong xây dựng, phát triển và sử dụng các thiết bị và phương tiện ít gây tiếng ồn.",
          "Chính sách và quy định: Áp dụng các tiêu chuẩn về chiếu sáng đô thị, yêu cầu tắt đèn vào ban đêm ở các khu vực không cần thiết. Khuyến khích sử dụng ánh sáng có bước sóng ít gây hại cho môi trường.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền về tác hại của ô nhiễm ánh sáng và khuyến khích cộng đồng tham gia vào các hoạt động giảm thiểu ánh sáng không cần thiết.",
        ],
        image: require("../assets/env/light4.jpg"),
      },
    ],
  },
  6: {
    id: 6,
    image: require("../assets/env/pollution6.png"),
    title: "Ô nhiễm tầm nhìn",
    description:
      "Là hiện tượng rác thải, các vật dụng được xả ra môi trường tự nhiên một cách phản logic. Chúng khiến mất mỹ quan đô thị, làm khó chịu cho người nhìn.",
    content: [
      {
        title: "Nguồn gây ô nhiễm tầm nhìn",
        body: [
          "Giao thông: Xe cộ và phương tiện giao thông là một nguồn gây ô nhiễm lớn, phát thải khí CO2, khí thải ô nhiễm và các hạt bụi từ động cơ đốt nhiên liệu.",
          "Công nghiệp:Các nhà máy, nhà máy sản xuất và cơ sở công nghiệp phát thải ra không khí và nước các chất ô nhiễm như khí thải, hóa chất độc hại, và chất thải rắn.",
          "Nông nghiệp:Sử dụng phân bón hóa học và thuốc trừ sâu trong nông nghiệp có thể gây ra ô nhiễm nước và đất.",
          "Chất thải nhựa và rác thải:  Sự sử dụng và xử lý chất thải nhựa không đúng cách có thể dẫn đến ô nhiễm môi trường, đặc biệt là ô nhiễm nước và đất.",
        ],
        image: require("../assets/env/visual1.png"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm không khí:",
        body: [
          "Hệ hô hấp:có thể gây ra các vấn đề về hô hấp, như viêm phế quản, hen suyễn, viêm phổi, và các vấn đề về dị ứng.",
          "Hệ tim mạch: Ô nhiễm không khí có thể gây ra các vấn đề về huyết áp, đau tim, và các bệnh tim mạch khác, do ảnh hưởng của các chất ô nhiễm lên hệ thống tim mạch..",
          "Hệ tiêu hóa: Các chất ô nhiễm trong nước và thực phẩm, như kim loại nặng và các hợp chất hóa học, có thể gây ra các vấn đề về tiêu hóa và hấp thụ chất dinh dưỡng.",
        ],
        image: require("../assets/env/visual2.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm tiếng ồn:",
        body: [
          "Sức khỏe con người: Ô nhiễm tiếng ồn có thể gây ra các vấn đề về thính lực, stress, mất ngủ, tăng huyết áp, và các vấn đề tim mạch.",
          "Hệ sinh thái: Tiếng ồn có thể ảnh hưởng đến hành vi và sức khỏe của động vật, làm gián đoạn giao tiếp, săn mồi, và di cư của các loài động vật.",
          "Kinh tế: Chi phí cho việc điều trị các bệnh liên quan đến tiếng ồn và giảm năng suất lao động do mất ngủ và stress.",
          "Xã hội: Ô nhiễm tiếng ồn ảnh hưởng đến chất lượng cuộc sống, gây ra căng thẳng xã hội và mâu thuẫn giữa các cộng đồng.",
        ],
        image: require("../assets/env/visual3.jpg"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm tiếng ồn:",
        body: [
          "Quy hoạch đô thị: Xây dựng các khu dân cư cách xa các nguồn gây tiếng ồn, tạo ra các vùng đệm cây xanh để giảm tiếng ồn.",
          "Công nghệ và thiết kế: Sử dụng vật liệu cách âm trong xây dựng, phát triển và sử dụng các thiết bị và phương tiện ít gây tiếng ồn.",
          "Chính sách và quy định: Áp dụng các quy định về mức độ tiếng ồn cho phép, kiểm soát tiếng ồn từ các nguồn công nghiệp và giao thông.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền về tác hại của ô nhiễm tiếng ồn và khuyến khích các hành vi giảm thiểu tiếng ồn trong cộng đồng.",
        ],
        image: require("../assets/env/visual3.jpg"),
      },
    ],
  },
};
export const story: IObjectData = {
  1: {
    id: 1,
    title: "Trách nhiệm của học sinh trong việc bảo vệ môi trường sống",
    description:
      "Tình trạng mà môi trường sống của chúng ta bị ô nhiễm và suy giảm chất lượng do sự tồn tại của các chất gây ô nhiễm",
    image: require("../assets/env/story1.png"),
    content: [],
  },
  2: {
    id: 2,
    title: "Phong trào em yêu môi trường xanh",
    description:
      "Bao gồm việc ô nhiễm các nguồn nước như sông, ao hồ và nguồn nước ngầm bởi các chất gây ô nhiễm như chất hóa học, chất thải công nghiệp và nông nghiệp, và vi khuẩn từ nước thải.",
    image: require("../assets/env/story2.png"),
    content: [],
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

export const allData = {
  [EDataType.BASIC]: basic,
  [EDataType.ACTIVITY]: activity,
  [EDataType.STORY]: story,
};
