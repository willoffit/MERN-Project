import React from 'react';

class Modal extends React.Component {

   componentDidUpdate() {
      if (this.props.modal) {
         document.body.style.overflow = 'hidden';
      }
      else {
         document.body.style.overflow = 'unset';
      }
   }

   render() {
      const { modal, currentUser } = this.props;
      if (!modal || !currentUser) return null;
      let component;

      switch (modal.type) {
         case 'createVideo':
            component = <CreateVideoForm />;
            break;
         case 'updateVideo':
            component = <EditVideoForm />;
         default:
            component = null;
      }

      return (
         <div className="modal-background" onClick={this.props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
               {component}
            </div>
         </div>
      );
   }
};

export default Modal;
