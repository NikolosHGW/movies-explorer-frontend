import './InfoTooltip.css';
import succesSvg from '../../images/success.min.svg';
import failSvg from '../../images/fail.min.svg';

export default function InfoTooltip({ isOpen, onClose, isSuccess, text }) {
  return (
    <div className={`info-tool${isOpen ? ' info-tool_opened' : ''}`}>
      <div className="info-tool__container">
        <button
          className="info-tool__close-icon"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <img className="info-tool__img" src={isSuccess ? succesSvg : failSvg} alt="success or fail icon" />
        <p className="info-tool__text">{text}</p>
      </div>
    </div>
  );
}
