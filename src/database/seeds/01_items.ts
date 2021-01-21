import * as Knex from 'knex'

export async function seed (knex: Knex): Promise<void> {
  await knex('items').insert([
    {
      title: 'Pilhas e Baterias',
      image_url: 'https://svgshare.com/i/TL6.svg'
    },
    {
      title: 'Resíduos Eletrônicos',
      image_url: 'https://svgshare.com/i/TLp.svg'
    },
    {
      title: 'Lâmpadas',
      image_url: 'https://svgshare.com/i/TM9.svg'
    },
    {
      title: 'Óleo de Cozinha',
      image_url: 'https://svgshare.com/i/TNg.svg'
    },
    {
      title: 'Resíduos Orgânicos',
      image_url: 'https://svgshare.com/i/TLq.svg'
    },
    {
      title: 'Papéis e Papelão',
      image_url: 'https://svgshare.com/i/TMh.svg'
    }
  ])
};
