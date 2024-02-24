// Kompilator w przegladarce zapozna sie ajpierw z metodami zdefiniowanymi za pomoca 'function'
// wiec moge dac dla czytelnosci najpierw wywolanie metody a pozniej same definicje metod  
validator();

/**
 * Validator main method
 */
function validator() {

  const input = document.getElementById('input');
  const result = document.getElementById('result');

  const validateBtn = document.getElementById('validateBtn');
  const clearBtn = document.getElementById('clearBtn');

  validateBtn.addEventListener('click', () => {
    result.innerHTML = validateValue(input) ? 'Valid': 'Invalid';
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';;
  });
}

/**
 *  Validate the input's value and return the validation status
 * */
function validateValue(input) {
  if(input.value) {
    const inputValue = convertInput(input.value);
  
    // Validation rules
    return (
      inputValue > 0 &&
      inputValue < 100 &&
      inputValue % 2 === 0
    );
  }

  return false;
} 

/**
 * Convert input value from String to Integer
 * */
function convertInput(inpVal = NaN) {
  return inpVal = +inpVal;
}


//? 1.Aplikacja nie działa poprawnie - co jest tego powodem i jak to naprawić?
//* Wartosc z inputa jest typu string - nalezy wykonac konwersje za pomomca `parseInt()` lub operatorem +
//* W warunku sprawdzania czy input miesci sie w przedziale (0-100) i jest parzysty, zawsze zmienimy result.inner na Valid niezaleznie od rezultatu w if-ie

//? 2.Aplikacja robi się co raz trudniejsza w utrzymaniu - spróbuj ułatwić zrozumienie tego kodu innym programistom w zespole poprzez lepszą organizację kodu.
//*

//? 3.Jak sprawić, żeby dodawanie i usuwanie kolejnych reguł walidacji nie wpływało na każdorazową edycję funkcji do walidacji?
//*
