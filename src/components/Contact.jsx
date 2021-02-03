import React from 'react'

class Contact extends React.Component {
    render() {
return <section className="section bg-light" id="contact">
  <div className="container">
    <div className="row">
      <div className="col-12 mb-4">
        <h2 className="mb-0 title">Contacto <span className="title-border ml-4 pl-3" /></h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12 mt-4 pt-2">
        <form method="post" name="myForm" onsubmit="return validateForm()">
          <p id="error-msg" />
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-4">
                <input type="text" className="form-control" placeholder="NAME" id="name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-4">
                <input type="email" className="form-control" placeholder="EMAIL" id="email" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-4">
                <input type="text" className="form-control" placeholder="SUBJECT" id="subject" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-4">
                <textarea className="form-control" placeholder="MESSAGE" rows={5} id="comments" defaultValue={""} />
              </div>
            </div>
          </div>
          <input type="submit" id="submit" name="send" className="btn btn-primary" defaultValue="Send message" />
        </form>
      </div>
    </div>
  </div>
</section>

    }
}

export default Contact