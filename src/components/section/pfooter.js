import React, { Fragment } from "react";


export default () => (
    <footer className="row">
        {/* {
              this.props.section && this.props.section.map((sec, i) => { */}

        <div className="row text-center">
            {/* <div className="col-sm-12 col-md-3 text-center">
                <h3 className="h3"> Use NairaBox</h3>
                <ul className="link-cell">
                    <li><a>Group 1</a></li>
                    <li><a>Group 2</a></li>
                </ul>

            </div>
            <div className="col-sm-12 col-md-3 text-center">
                <h3 className="h3"> Plan Events</h3>
                <ul className="link-cell">
                    <li><a>Plan 1</a></li>
                    <li><a>Plan 2</a></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
                <h3 className="h3"> Check Events</h3>
                <ul className="link-cell">
                    <li><a>Event 1</a></li>
                    <li><a>Event 2</a></li>
                </ul>
            </div> */}
        </div>

      
        <div className="footer-section-border"></div>
        <div className="row text-center">
            <div class="g-cell g-cell-12-12">
                <p class="footer-copyright text-body-medium">© {new Date().getFullYear()} Jhay</p>
            </div>
        </div>
    </footer>
)