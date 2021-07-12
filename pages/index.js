import styled from 'styled-components';

import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

const Title = styled.h1`
  font-size: 50px;
  color: ${ ( { theme } ) => theme.colors.primary };
`;

function ProfileSidebar( propriedade ) {
  console.log( propriedade );
  return (
    <Box>
      <img src={ `https://github.com/${ propriedade.githubUser }.png` } style={ { borderRadius: '8px' } } />
    </Box>
  );
}

export default function Home() {
  const usuarioAleatorio = 'fabio-ericle';
  const pessoasFavoritas =
    [
      'juunegreiros',
      'omariosouto',
      'peas',
      'rafaballerini'
    ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={ { gridArea: 'profileArea' } }>
          <ProfileSidebar githubUser={ usuarioAleatorio } />
        </div>
        <div className="welcomeArea" style={ { gridArea: 'welcomeArea' } }>
          <Box>
            <h1 className="title">
              Bem vindo(s)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={ { gridArea: 'profileRelationsArea' } }>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({ pessoasFavoritas.length })
            </h2>

            <ul>
              { pessoasFavoritas.map( ( item ) => {
                return (
                  <li>
                    <a href={ `/users/${ item }` } key={ item }>
                      <img src={ `https://github.com/${ item }.png` } />
                      <span>{ item }</span>
                    </a>
                  </li>
                );
              } ) }
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidade
          </Box>
        </div>
      </MainGrid>
    </>
  );
}
