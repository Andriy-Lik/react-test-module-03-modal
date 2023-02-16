import PropTypes from 'prop-types';

const Publications = ({ title, text }) => {
    return (
        <article>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    );
};

Publications.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Publications;