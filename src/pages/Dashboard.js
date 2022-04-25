import TicketCard from '../components/TicketCard';

const Dashboard = () => {
  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Homepage TCC',
      owner: 'Luiz Marrano',
      avatar:
        'https://scontent.fgru8-1.fna.fbcdn.net/v/t39.30808-6/273537719_4971119619598230_1397984496568820702_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGZJVxBP_DHGwuEPxcZrEitsLVRIlbr4gywtVEiVuviDGo16u7sNDUPsiPILQWoAcqkpDpUyEtaUq_W3adviDVC&_nc_ohc=1vQEeYXHRd0AX8V-XL-&_nc_oc=AQkaBOamdEMB3Q3F3BpFD3TWi7wB0wVETEUsb_6YvMbOpOJ099seOSDeXYRbvRSRYfPM_RjMNjdUxlnyB8P_-lSU&tn=_puLOYw_qb3HSinZ&_nc_ht=scontent.fgru8-1.fna&oh=00_AT_T5ogHmCB5dHXGg5B_ssjmWCs3r_GYGcaW29WBaO020w&oe=62620C40',
      status: 'done',
      priority: 5,
      progress: 40,
      description: 'Terminar a Homepage do Ecommerce do TCC',
      timestamp: '2022-04-19',
    },
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Curso Python',
      owner: 'Luiz Marrano',
      avatar:
        'https://scontent.fgru8-1.fna.fbcdn.net/v/t39.30808-6/273537719_4971119619598230_1397984496568820702_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGZJVxBP_DHGwuEPxcZrEitsLVRIlbr4gywtVEiVuviDGo16u7sNDUPsiPILQWoAcqkpDpUyEtaUq_W3adviDVC&_nc_ohc=1vQEeYXHRd0AX8V-XL-&_nc_oc=AQkaBOamdEMB3Q3F3BpFD3TWi7wB0wVETEUsb_6YvMbOpOJ099seOSDeXYRbvRSRYfPM_RjMNjdUxlnyB8P_-lSU&tn=_puLOYw_qb3HSinZ&_nc_ht=scontent.fgru8-1.fna&oh=00_AT_T5ogHmCB5dHXGg5B_ssjmWCs3r_GYGcaW29WBaO020w&oe=62620C40',
      status: 'working on it',
      priority: 2,
      progress: 70,
      description: 'Terminar o curso de Python da Alura',
      timestamp: '2022-04-30',
    },
    {
      category: 'Q2 2022',
      color: 'blue',
      title: 'Fazer um Bot',
      owner: 'Luiz Marrano',
      avatar:
        'https://scontent.fgru8-1.fna.fbcdn.net/v/t39.30808-6/273537719_4971119619598230_1397984496568820702_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGZJVxBP_DHGwuEPxcZrEitsLVRIlbr4gywtVEiVuviDGo16u7sNDUPsiPILQWoAcqkpDpUyEtaUq_W3adviDVC&_nc_ohc=1vQEeYXHRd0AX8V-XL-&_nc_oc=AQkaBOamdEMB3Q3F3BpFD3TWi7wB0wVETEUsb_6YvMbOpOJ099seOSDeXYRbvRSRYfPM_RjMNjdUxlnyB8P_-lSU&tn=_puLOYw_qb3HSinZ&_nc_ht=scontent.fgru8-1.fna&oh=00_AT_T5ogHmCB5dHXGg5B_ssjmWCs3r_GYGcaW29WBaO020w&oe=62620C40',
      status: 'working on it',
      priority: 3,
      progress: 10,
      description: 'Fazer um bot em Python',
      timestamp: '2022-08-19',
    },
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);

  return (
    <div className="dashboard">
      <h1> My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={filteredTicket.color}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
