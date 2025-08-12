const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                          <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
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
                                                                       <span>🍴 ${repo.forks}</span>
                                                                       <span>⭐ ${repo.stars}</span>
                                                                       <span>👀 ${repo.watchers}</span>
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
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado 😓</h3>`
    }
  }
export { screen }