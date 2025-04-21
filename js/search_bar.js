const products = [
    "Jeans", "T-shirt", "Scurt", "Frok",
    "Glasses", "Adidas", "Glosy purse", "Women's jeans", "Man's jeans" , "Under 5000"
  ];
  
  function showSuggestions() {
    const input = document.getElementById('search-input');
    const suggestions = document.getElementById('suggestions');
    const value = input.value.toLowerCase();
    suggestions.innerHTML = '';
  
    if (value) {
      const filtered = products.filter(item => item.toLowerCase().includes(value));
      filtered.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.onclick = () => {
          input.value = item;
          suggestions.innerHTML = '';
        };
        suggestions.appendChild(li);
      });
    }
  }
  
  function searchProduct() {
    const input = document.getElementById('search-input').value;
    alert("You searched for: " + input);
  }
  