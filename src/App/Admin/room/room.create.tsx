import { InputTextComponent } from "../../../compoments/input";
import { TextTareaCompoment } from "../../../compoments/text-tarea/indext";

export const RoomCreateForm = () => {
  return (
    <>
      <h3 className="text-center text-black text-4xl">Tạo phòng cho thuê</h3>
      <div className="max-w-4xl mx-auto">
        <InputTextComponent
          key="room-name"
          label="Tên phòng"
          placeholder="Nhập tên phòng ..."
        />
        <InputTextComponent
          key="room-type"
          label="Loại phòng "
          placeholder="Chọn loại phòng ..."
          type="number"
        />
        <InputTextComponent
          key="room-size"
          label="Số lượng người "
          placeholder="Nhập số lượng người ..."
          type="number"
        />
        <InputTextComponent
          key="image-room-1"
          label="Đường dẫn ảnh 1"
          placeholder="Nhập đường dẫn ảnh 1..."
        />
        <InputTextComponent
          key="image-room-2"
          label="Đường dẫn ảnh 2"
          placeholder="Nhập đường dẫn ảnh 2..."
        />
        <InputTextComponent
          key="image-room-3"
          label="Đường dẫn ảnh 3"
          placeholder="Nhập đường dẫn ảnh 3..."
        />
        <TextTareaCompoment
          key="room-description"
          label="Mô tả phòng"
          placeholder="nhập mô tả phòng ..."
        />
        <InputTextComponent
          key="room-price"
          label="Giá phòng"
          placeholder="Nhập giá phòng mong muốn ..."
          type="number"
        />
        <TextTareaCompoment
          key="room-policy"
          label="Nội quy phòng"
          placeholder="nhập nội quy phòng ..."
        />
      </div>
    </>
  );
};
