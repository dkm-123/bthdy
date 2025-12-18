let pages = document.querySelectorAll('.page');
let currentPage = 0;

function updatePages() {
  pages.forEach((page, index) => {
    page.classList.remove('active');
    if (index === currentPage) {
      page.classList.add('active');
    }
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
}

updatePages();
