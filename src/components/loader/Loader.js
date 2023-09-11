import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <ThreeDots
        height="40"
        width="40"
        radius="4"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
