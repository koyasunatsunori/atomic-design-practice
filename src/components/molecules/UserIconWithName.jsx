import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImg img height={200} width={150} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

//.div, .img, .pはプロパティを割り当てるタグを指定している
const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
