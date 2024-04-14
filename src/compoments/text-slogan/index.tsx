import { TypeAnimation } from "react-type-animation";

export const TextSlogan = () => {
  return (
    <div className="mx-44">
      {" "}
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Hà Giang - vùng đất hùng vĩ, nằm ẩn mình trong dòng núi non của vùng cao nguyên đá Đồng Văn. Đến Hà Giang, bạn sẽ được đắm mình trong khung cảnh thiên nhiên tuyệt đẹp, từ những thửa ruộng bậc thang xanh mướt, đến những con đường quanh co nối liền những ngọn đồi đá, tạo nên một bức tranh hùng vĩ mà không gian và thời gian dường như ngừng trôi. Đây không chỉ là nơi đón chào bình minh đẹp như mơ, mà còn là nơi thức dậy trước bình minh, cùng với những câu chuyện dân tộc sâu sắc và những trải nghiệm văn hóa độc đáo. Hãy để Hà Giang là điểm dừng chân của bạn, nơi bạn tìm thấy sự kỳ diệu của đất trời Việt Nam.",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <hr className="h-2 mt-10" />
    </div>
  );
};
