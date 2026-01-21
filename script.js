const studentListContainer = document.getElementById('student-list');
const filterButtons = document.querySelectorAll('.filter-btn');

  // 학생 데이터 불러오기
  function displayStudents(students) {
      studentListContainer.innerHTML = ''; // 초기화

      students.forEach(student => {
          const card = document.createElement('div');
          card.className = `student-card status-${student.status}`;
          
          card.innerHTML = `
              <div class="student-id">${student.id}</div>
              <div class="student-name">${student.name}</div>
              <div class="student-class">${student.className}</div>
              <span class="status-badge">${student.status}</span>
          `;
          
          studentListContainer.appendChild(card);
      });
  }

  // 필터버튼
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // 버튼 active 스타일 변경
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const selectedStatus = button.getAttribute('data-status');

          // 전체인 경우 모든 데이터, 아니면 필터링된 데이터 전달
          if (selectedStatus === '전체') {
              displayStudents(serverStudents);
          } else {
              const filtered = serverStudents.filter(s => s.status === selectedStatus);
              displayStudents(filtered);
          }
      });
  });

  // 초기 화면 실행 (전체 데이터 표시)
  displayStudents(serverStudents);