import { useRef, useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import { Overlay, Wrapper } from "./styled";
import Cross from "../Cross/Cross";
import { useSelector, useDispatch } from "react-redux";
import { onCloseModalBox } from "../../../reducers/ui";

const Modal = ({ modalType = "", children }) => {
  const currentModalType = useSelector((state) => state).ui.modalType;

  const dispatch = useDispatch();

  const ref = useRef(null);

  const onClickOutside = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch(onCloseModalBox());
      }
    },
    [currentModalType]
  );

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("mousedown", onClickOutside);
    }
    return () => {
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [currentModalType]);

  if (modalType !== currentModalType) return null;

  return ReactDom.createPortal(
    <Overlay>
      <Wrapper ref={ref}>
        {/* <Cross onClick={() => false} /> */}
        {children}
      </Wrapper>
    </Overlay>,
    document.getElementById("modal")
  );
};

export default Modal;
