import React from "react";

export default function Prosuccard({
  sersucstyl,
  Category,
  Expected,
  abc_teach,
  tophd,
  fultex,
}) {
  return (
    <div className="col-lg-6 col-md-6">
      <div className={`${sersucstyl.for_bdr} ${sersucstyl.succes_cont}`}>
        <div className={`${sersucstyl.abc_teach} ${sersucstyl.abc_marg}`}>
          <img src={abc_teach} className="img-fluid" />
          <h2>{tophd}</h2>
        </div>
        <div class={sersucstyl.abc_completion}>
          <div class="row">
            <div
              class={`${sersucstyl.comple_conten} col-lg-6 col-md-6 col-sm-6 col-12`}
            >
              <h2>Category</h2>
              <p>{Category}</p>
            </div>
            <div
              class={`${sersucstyl.comple_conten} col-lg-6 col-md-6 col-sm-6 col-12`}
            >
              <h2>Expected Completion</h2>
              <p>{Expected}</p>
            </div>
          </div>
        </div>

        <div class={`${sersucstyl.for_bdr} ${sersucstyl.abc_challenge}`}>
          <h2>Project Description</h2>
          <p>{fultex}</p>
        </div>
      </div>
    </div>
  );
}
