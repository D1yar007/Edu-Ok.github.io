

  document.addEventListener("DOMContentLoaded", function() {
    const ratingForm = document.querySelector('.rating');
    const ratingOutput = document.getElementById('rating-output');

    ratingForm.addEventListener('change', function() {
      const selected = ratingForm.querySelector('input[name="rating"]:checked');
      if (selected) {
        ratingOutput.textContent = "Вы выбрали " + selected.value + " звезд";
      }
    });
  });

