import styled from 'styled-components';

const StyledProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 240px;
  min-height: 250px;
  border-radius: 150px;
`;

export default function ProfileImage({ profileImageURL }) {
  return (
    <StyledProfileImage>
      <img
        src={`/profile-image/${profileImageURL}`}
        alt="프로필 이미지"
        width="175px"
        height="250px"
      />
    </StyledProfileImage>
  );
}
