import { Link } from 'react-router-dom';

function Test2() {
  console.log('2');
  return (
    <div>
      Hello test world!! Two!!{' '}
      <div>
        <Link to="/">
          {' '}
          <button type="button">go to Test1</button>
        </Link>
      </div>
    </div>
  );
}

export default Test2;
