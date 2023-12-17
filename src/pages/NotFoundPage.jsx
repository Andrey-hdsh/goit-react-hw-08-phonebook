import { Link } from 'react-router-dom';

const styles = {
    wrapper: {
        padding: '20px 0 0 20px',
        fontSize: '18px',
        color: 'white',
        wordSpacing: '2px'
    },
    link: {
        color: 'red',
     }
}

const NotFoundPage = () => {
  return (
    <div style={styles.wrapper}>
      The page you are looking for does not exist. Please check the link  {' '}
          <Link to="/" style={styles.link}> HOME </Link> and try again.
    </div>
  );
};

export default NotFoundPage;