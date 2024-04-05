import styled from 'styled-components';

const StyledProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 240px;
  min-height: 250px;
  border: 1px solid #d3d3d3;
  border-radius: 150px;
`;
const baseURL = "/profile-image"
export default function ProfileImage({ profileImageURL }) {
  return (
    <StyledProfileImage>
      <img src={`${baseURL}/${profileImageURL}`} alt="프로필 이미지" width="175px" height="250px" />
    </StyledProfileImage>
  );
}
