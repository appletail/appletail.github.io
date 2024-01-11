import { Link } from 'react-router-dom';

function Test() {
  console.log('1');
  return (
    <div>
      Hello test world2!!
      <div>
        <Link to="/test2">
          <button type="button">go to Test2</button>
        </Link>
      </div>
    </div>
  );
}

export default Test;
