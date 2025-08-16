const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                         <div class="data">
                                             <h1>${user.name ?? 'Não possui nome cadastrado 😓'}</h1>
                                             <p>${user.bio ?? 'Não possui bio cadastrada 😓'}</p>
                                             <div class="follow-info">
                                         <div class="followers">
                                            <span>Seguidores</span>
                                            <p>${user.followers}</p>
                                         </div>
                                         <div class="following">
                                            <span>Seguindo</span>
                                            <p>${user.following}</p>
                                         </div>
                                             </div>
                                             </div>
                                      </div>`
    let repositoriesItems = ''
    user.repositories.forEach(repo => repositoriesItems += `<li>
      <a href="${repo.html_url}" target="_blank">${repo.name}
        <div class="repo-details">
          <span>🍴 ${repo.forks || 'Sem forks'}</span>
          <span>⭐ ${repo.stars || 'Sem estrelas'}</span>
          <span>👀 ${repo.watchers || 'Sem watchers'}</span>
          <span>💻 ${repo.language ?? 'N/A'}</span>
        </div>
      </a>
    </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItems}</ul>
                                        </div>`
        }   

      let eventsItems = '';
      user.events.forEach(element => {
        if (element.type === 'PushEvent') {
          eventsItems += `<li>
            <h3>${element.repo.name}</h3>
            <p>→ ${element.payload.commits?.[0]?.message ?? 'Sem mensagem de commit'}</p>
          </li>`;
        } else if (element.type === 'CreateEvent') {
          eventsItems += `<li>
            <h3>${element.repo.name}</h3>
            <p>→ Criado um ${element.payload.ref_type}</p>
          </li>`;
        }
      });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                 <h2>Eventos</h2>
                                                <ul>${eventsItems}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado 😓</h3>`
    }
  }
export { screen }