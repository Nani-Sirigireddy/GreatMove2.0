import React from 'react'

export const Feedback = () => {
  return (
    <>  <form class="feedback">
    <h1 class="heading">Give feedback</h1>
    <p class="para">What do you think of the issue search experience within the project?</p>
  
    <div class="feedback-level">
      <div class="level">
        <i class="lar la-sad-tear"></i>
      </div>
      <div class="level">
        <i class="las la-frown"></i>
      </div>
      <div class="level">
        <i class="lar la-meh"></i>
      </div>
      <div class="level">
        <i class="lar la-smile"></i>
      </div>
      <div class="level">
        <i class="lar la-grin"></i>
      </div>
    </div>
  
    <div class="feedback-msg">
      <p class="para">
        What are the main reasons for your rating?
      </p>
      <textarea name="" id=""></textarea>
    </div>
  
    <div class="agreement">
      <div class="checkbox">
        <input type="checkbox" name="" id=""/>
        <label for="">I may be contacted about this feedback <a href="#">Privacy Policy</a>.</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" name="" id=""/>
        <label for="">I'd like to help improve by joining the <a href="#">Reasearch Group</a>.</label>
      </div>
    </div>
  
    <div class="buttons">
      <a href="javascript:alert('Thanks for submiting your feedback')">Submit</a>
      <a href="You just cancelled your to submit the feedback">Cancel</a>
    </div>
  </form></>


  
  )
}
