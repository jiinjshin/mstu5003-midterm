// **'Show Me An Example!' Section**

// Multiple Choice Question

// User uses dropdown menu to select an answer
// User clicks submit which triggers function
  // If/else statement to trigger one of two responses:

    // If: A2 (value: correct)
      // Grey box becomes Green box
      // "Correct!" Appears
      // Default explanation appears

      // Else: (A1 or A3 (value: incorrect))
        // Grey box becomes Red box
        // "Incorrect." Appears
        // Default explanation appears

document.getElementById('submitMultipleChoice').addEventListener('click',function() {
  if(document.getElementById('multipleChoice').value == "correct") {
    document.getElementsByClassName('boxResponsive')[0].classList.remove('boxResponsiveRed');
    document.getElementsByClassName('boxResponsive')[0].classList.add('boxResponsiveGreen');
  } else {
    document.getElementsByClassName('boxResponsive')[0].classList.remove('boxResponsiveGreen');
    document.getElementsByClassName('boxResponsive')[0].classList.add('boxResponsiveRed');
  }
});

// **'Break It Down For Me!' Section**

// Interactive Flowchart of Study

// **"active" state of third column buttons:**
  // background-color: #5c5c5c (dark grey)
  // text-color: white

  // User clicks 'Healthcare: Related' option
    // Healthcare button turns darker green
    // Drug Use button color fades
    // War on Terror button color fades

    // "Recalled" div becomes "active"
    //  "Trustworthy, honest, likable" div becomes active

  // User clicks 'Drug Use: Somewhat Related' option
    // Healthcare button color fades
    // Drug Use button turns darker orange
    // War on Terror button color fades

    // "Did not recall" div becomes "active"
    //  "Trustworthy, honest, likable" div becomes active

  // User clicks 'War on Terror: Not At All Related' option
    // Healthcare button color fades
    // Drug Use button color fades
    // War on Terror button turns darker red

    // "Recalled" div becomes "active"
    //  "Untrustworthy, dishonest, unlikable" div becomes active
