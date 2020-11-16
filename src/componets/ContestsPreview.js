import React from 'react';
import propTypes from 'prop-types';

const ContestsPreview = ({ value }) => {
  return (
    <div className='ContestPreview' key={value.id.toString()}>
      <h3 className='category-name'>{value.categoryName}</h3>
      <p className='contest-name'>{value.contestName}</p>
    </div>
  );
};

const ContestsPreviews = ({ previews }) => {
  const list = (
    <>
      {previews.map((post) => (
        <ContestsPreview key={post.id} value={post} />
      ))}
    </>
  );
  return <>{list}</>;
};
// return { content };
// const listItems = previews.map((contest) => {
//   <ContestsPreview value={contest} />;
// });
//   console.log('listItems', listItems);
//   return <div>{listItems}</div>;
// };
// ContestsPreview.propTypes = {
//   message: propTypes.object,
// };

export default ContestsPreviews;
