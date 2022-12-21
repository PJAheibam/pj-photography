import Skeleton from "react-loading-skeleton";
import { Buttons, Content, Item, ItemHeader } from "./styles";

function CardSkeleton() {
  return (
    <Item>
      {/* header image */}
      <ItemHeader>
        <Skeleton
          borderRadius={10}
          style={{
            aspectRatio: "16/9",
            height: "100%",
            width: "100%",
          }}
        />
      </ItemHeader>
      <Content>
        {/* Name */}
        <Skeleton height={25} style={{ marginTop: "0.5rem" }} />
        <Skeleton height={25} style={{ marginBottom: "0.75rem" }} />
        {/* Desc */}
        <Skeleton height={16} count={3} />
      </Content>
      <Buttons>
        {/* single button */}
        <Skeleton height={40} borderRadius={20} width={93} />
      </Buttons>
    </Item>
  );
}

export default CardSkeleton;
