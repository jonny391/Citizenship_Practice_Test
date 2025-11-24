const QUESTIONS = [
  {
    "question": "1. A Member of Parliament from Montreal announces that she will spend her weekend in her electoral district.  This means she would be:",
    "options": [
      "In her office on Parliament Hill.",
      "Visiting the province of Quebec.",
      "In the part of Montreal where she was elected.",
      "Going on a vacation."
    ],
    "answer": 2
  },
  {
    "question": "2. After a federal election, which party forms the new government?",
    "options": [
      "The party with the most elected representatives is invited by the Governor General to become the party in power.",
      "The King himself picks any party to run the government.",
      "The Governor General proposes a law for elected officials to become the governing body.",
      "The Premiers of each province pick a party to run the government"
    ],
    "answer": 0
  },
  {
    "question": "3. Approximately how many Canadians served in the First World War?",
    "options": [
      "7000.",
      "8 million.",
      "About 60,000.",
      "More than 600,000."
    ],
    "answer": 3
  },
  {
    "question": "4. Canada has three territories and how many provinces?",
    "options": [
      "13",
      "10",
      "3",
      "5"
    ],
    "answer": 1
  },
  {
    "question": "5. Fatima is a new immigrant in Canada.  What law allows her to take a job at par with a man?",
    "options": [
      "Equality of women and men",
      "Equality of all races.",
      "Equal pay for equal work.",
      "Equal rights."
    ],
    "answer": 0
  },
  {
    "question": "6. From where does the name “Canada” come from?",
    "options": [
      "From the Inuit word meaning country.",
      "From the French word meaning joining.",
      "From the Métis word meaning rivers.",
      "From \"Kanata\", the Huron-Iroquois word for village."
    ],
    "answer": 3
  },
  {
    "question": "7. Give an example of how you can show responsibility by participating in your community.",
    "options": [
      "Mind your own business.",
      "Have a party.",
      "Keep your property tidy.",
      "Volunteer."
    ],
    "answer": 3
  },
  {
    "question": "8. Give an example of where English and French have equal status in Canada.",
    "options": [
      "In schools.",
      "In the workplace.",
      "In the Parliament of Canada.",
      "At City Hall."
    ],
    "answer": 2
  },
  {
    "question": "9. Give the first line of Canada’s national anthem?",
    "options": [
      "O Canada!  Our home and native land!",
      "O Canada!  Our province and native land!",
      "O Canada!  From far and wide, O Canada,",
      "O Canada!  We stand on guard for thee."
    ],
    "answer": 0
  },
  {
    "question": "10. How are Members of Parliament chosen?",
    "options": [
      "Appointed by the Prime Minister.",
      "Elected by Canadian citizens.",
      "Appointed by the King.",
      "Elected by the Provincial Ministers."
    ],
    "answer": 1
  },
  {
    "question": "11. How are Senators chosen?",
    "options": [
      "By the Governor General of Canada.",
      "By the Premiers of all provinces.",
      "Appointed by the King.",
      "Senators are appointed by the Governor General on the advice of the Prime Minister."
    ],
    "answer": 3
  },
  {
    "question": "12. How does a bill become a law?",
    "options": [
      "The Lieutenant Governor must approve the bill.",
      "Approval by a majority in the House of Commons and Senate and finally the Governor General.",
      "The King must sign the bill.",
      "Approval by the Members of the Legislative Assembly."
    ],
    "answer": 1
  },
  {
    "question": "13. How is a Cabinet Minister chosen?",
    "options": [
      "By the King.",
      "By the voters.",
      "By other Cabinet Ministers.",
      "By the Prime Minister"
    ],
    "answer": 3
  },
  {
    "question": "14. How is the government formed after a federal election?",
    "options": [
      "The party with the most elected representatives becomes the party in power. The King chooses the Prime Minister from this party",
      "Ordinarily, the party with the most elected representatives becomes the party in power. The leader of this party becomes the Prime Minister.",
      "The Governor General picks a party and a Prime Minister to run the government.",
      "Each province elects one representative to form the government. The King then chooses the Prime Minister."
    ],
    "answer": 1
  },
  {
    "question": "15. How is the Prime Minister chosen?",
    "options": [
      "The King appoints the Prime Minister.",
      "The Governor General with the Senate appoint the Prime Minister.",
      "The leader of the party with the most elected representatives becomes the Prime Minister.",
      "The MPs vote on the Prime Minister."
    ],
    "answer": 2
  },
  {
    "question": "16. In Canada, are you allowed to question the police about their service or conduct?",
    "options": [
      "No, police service and conduct is not open to discussion with Canadians.",
      "Yes, you can question their service but not their conduct.",
      "Yes, you can question their conduct but not their service.",
      "Yes, if you feel the need to."
    ],
    "answer": 3
  },
  {
    "question": "17. In Canada’s justice system what does “presumption of innocence” mean?",
    "options": [
      "Everyone is guilty until proven innocent",
      "Guilt is decided by public opinion",
      "Innocence is decided by public opinion",
      "Everyone is innocent until proven guilty"
    ],
    "answer": 3
  },
  {
    "question": "18. In the 1960s, Quebec experienced an era of rapid change. What is this called?",
    "options": [
      "The West Movement.",
      "The Revolution.",
      "The Quiet Revolution.",
      "La Francophonie."
    ],
    "answer": 2
  },
  {
    "question": "19. In what industry do most Canadians work?",
    "options": [
      "Natural resources",
      "Tourism.",
      "Service.",
      "Manufacturing."
    ],
    "answer": 2
  },
  {
    "question": "20. In which region do more than half the people in Canada live?",
    "options": [
      "Central Canada.",
      "Prairies.",
      "Atlantic Canada.",
      "Northern Canada."
    ],
    "answer": 0
  },
  {
    "question": "21. Name all the federal political parties in the House of Commons and their leaders",
    "options": [
      "Conservative (Pierre Poilievre), NDP (Don Davies - interim leader), Liberal (Mark Carney), Bloc Quebecois (Blanchet), Green Party (May)",
      "Conservative (Poilievre), Green (May), Liberal (Trudeau), Bloc Quebecois (Duceppe)",
      "NDP (Mulcair), Green (May), Liberal (Rae), Bloc Quebecois (Paillé)",
      "Liberal (Ignatieff), Conservative (Ambrose), NDP (Turmel), Green (May)"
    ],
    "answer": 0
  },
  {
    "question": "22. Name six responsibilities of citizenship.",
    "options": [
      "Getting a job, making money, raising a family, paying taxes, mowing your lawn, voting in provincial elections.",
      "Voting in municipal elections only, joining a political party, getting a job, obeying the law, driving safely, picking up litter.",
      "Caring for the environment, not littering, paying taxes, obeying the law, helping others, respecting others.",
      "Obeying the law, taking responsibility for oneself and one's family, helping others in the community, voting in elections, serving on a jury, protecting and enjoying our heritage and environment."
    ],
    "answer": 3
  },
  {
    "question": "23. Name the five regions of Canada",
    "options": [
      "Midwest, North, South, East, Central",
      "Maritimes, Ontario, Quebec, Prairies, and British Columbia",
      "Atlantic, Central, Prairie, West Coast, and North",
      "West, Central, East, Prairies, and Territories"
    ],
    "answer": 2
  },
  {
    "question": "24. Name three additional rights protected by the Canadian Charter of Rights and Freedoms",
    "options": [
      "Freedom of speech, Right to own land, and Right to a fair trial.",
      "Mobility rights, Multiculturalism, and Aboriginal Peoples' rights.",
      "Right to ski anywhere in Canada, Moving rights, and Right to public assembly.",
      "Right to vote, Right to speak publicly, and Security rights."
    ],
    "answer": 1
  },
  {
    "question": "25. Name two fundamental freedoms protected by the Canadian Charter of Rights and Freedoms.",
    "options": [
      "Freedom of conscience and religion, and Freedom of association.",
      "Equality rights, and to care for Canada's heritage.",
      "Basic freedoms, and obeying laws.",
      "Aboriginal peoples' rights, and to volunteer."
    ],
    "answer": 0
  },
  {
    "question": "26. Name two key documents that contain our rights and freedoms.",
    "options": [
      "The Canadian Constitution and English common law.",
      "Civil code of France and the Canadian Constitution.",
      "Canadian Charter of Rights and Freedoms and Magna Carta (the Great Charter of Freedoms).",
      "Laws passed by Parliament and English common law."
    ],
    "answer": 2
  },
  {
    "question": "27. Name two responsibilities of the federal government.",
    "options": [
      "National defence and firefighting.",
      "National defence and foreign policy.",
      "Citizenship and highways.",
      "Recycling and education."
    ],
    "answer": 1
  },
  {
    "question": "28. Name two responsibilities of the provincial and territorial government.",
    "options": [
      "Citizenship and Foreign Policy",
      "Health and Education",
      "Defense and Currency",
      "Criminal Law and Interprovincial Trade"
    ],
    "answer": 1
  },
  {
    "question": "29. On what date did Nunavut become a territory?",
    "options": [
      "July 1st, 1867",
      "April 1st, 1999",
      "June 24th, 1995",
      "March 31st, 1949"
    ],
    "answer": 1
  },
  {
    "question": "30. One third of all Canadians live in which province?",
    "options": [
      "Quebec.",
      "Ontario.",
      "Northwest Territories.",
      "Manitoba."
    ],
    "answer": 1
  },
  {
    "question": "31. The Canadian Coat of Arms and motto is “A Mari Usque Ad Mare.”  This means:",
    "options": [
      "From the ocean to the sea.",
      "From sea to sea.",
      "From the sea to the ends of the earth.",
      "From the water to the earth."
    ],
    "answer": 1
  },
  {
    "question": "32. What are some examples of taking responsibility for yourself and your family?",
    "options": [
      "Buying a house and a TV.",
      "Getting a job, taking care of one's family and working hard in keeping with one's abilities.",
      "Doing laundry and keeping the house clean.",
      "Study hard so you can earn enough money to take a vacation."
    ],
    "answer": 1
  },
  {
    "question": "33. What are the Prairie provinces and their capital cities?",
    "options": [
      "Alberta (Edmonton) and Saskatchewan (Regina).",
      "Alberta (Edmonton), Saskatchewan (Regina) and Manitoba (Winnipeg).",
      "Saskatchewan (Regina) and Manitoba (Winnipeg).",
      "Saskatchewan (Regina), Manitoba (Winnipeg) and Ontario (Toronto)."
    ],
    "answer": 1
  },
  {
    "question": "34. What are the provinces of Central Canada and their capital cities?",
    "options": [
      "Manitoba (Winnipeg) and Ontario (Toronto).",
      "Quebec (Quebec City) and Prince Edward Island (Charlottetown).",
      "Ontario (Toronto) and Quebec (Quebec City).",
      "Saskatchewan (Regina) and Manitoba Winnipeg)."
    ],
    "answer": 2
  },
  {
    "question": "35. What are the provinces of the Atlantic region and their capital cities?",
    "options": [
      "Nova Scotia (Halifax), New Brunswick (Fredericton), Prince Edward Island (Charlottetown) and Quebec (Quebec).",
      "Newfoundland and Labrador (St. John's), Nova Scotia (Halifax), New Brunswick (Fredericton) and Prince Edward Island (Charlottetown).",
      "Newfoundland and Labrador (St. John's), Nova Scotia (Halifax), New Brunswick (Fredericton) and Quebec (Quebec).",
      "Nova Scotia (Halifax), New Brunswick (Fredericton), Quebec (Quebec City)and Ontario (Toronto)."
    ],
    "answer": 1
  },
  {
    "question": "36. What are the territories of Northern Canada and their capital cities?",
    "options": [
      "Alaska (Juneau) and Yukon Territory ( Whitehorse).",
      "Northwest Territories (Yellowknife) and Alaska (Juneau).",
      "Northwest Territories (Yellowknife).",
      "Yukon Territory (Whitehorse), Northwest Territories (Yellowknife), and Nunavut (Iqaluit)."
    ],
    "answer": 3
  },
  {
    "question": "37. What are the three levels of government in Canada?",
    "options": [
      "Federal, Provincial and Territorial, Municipal (local).",
      "Federal, Provincial and City.",
      "Federal, Territorial and Provincial.",
      "Federal, State and Local."
    ],
    "answer": 0
  },
  {
    "question": "38. What are the three main groups of Aboriginal peoples?",
    "options": [
      "First Nations, Métis and Inuit.",
      "Acadians, Métis and Inuit.",
      "United Empire Loyalists, Métis and Inuit.",
      "Inuit, Métis and Acadians."
    ],
    "answer": 0
  },
  {
    "question": "39. What are the three main types of industry in Canada?",
    "options": [
      "Natural resources, tourism and service industries..",
      "Tourism, services and manufacturing.",
      "Natural resources, tourism and manufacturing.",
      "Natural resources, manufacturing and services."
    ],
    "answer": 3
  },
  {
    "question": "40. What are the three parts of Parliament?",
    "options": [
      "The Sovereign, Governor General and Prime Minister.",
      "The House of Commons, the Legislative Assembly and the Senate.",
      "The King, the Legislative Assembly and the Senate.",
      "The Sovereign, the House of Commons and the Senate."
    ],
    "answer": 3
  },
  {
    "question": "41. What are the two official languages of Canada?",
    "options": [
      "English and Métis.",
      "Inuktitut and French.",
      "English and French.",
      "English and Inuktitut."
    ],
    "answer": 2
  },
  {
    "question": "42. What country is Canada’s largest trading partner?",
    "options": [
      "Mexico.",
      "United States of America.",
      "China.",
      "Japan."
    ],
    "answer": 1
  },
  {
    "question": "43. What did the Canadian Pacific Railway symbolize?",
    "options": [
      "Easy access to the West Coast.",
      "What can be achieved by working together.",
      "Unity.",
      "Ribbons of steel."
    ],
    "answer": 2
  },
  {
    "question": "44. What did the Fathers of Confederation do?",
    "options": [
      "They worked together to establish a new country, the Dominion of Canada",
      "They were explorers who formed an expedition to survey Northern Canada",
      "They formed a republic state in Canada",
      "They were a group of politicians that tried to unite Canada to the United States"
    ],
    "answer": 0
  },
  {
    "question": "45. What do you call a law before it is passed?",
    "options": [
      "A New law.",
      "A Proposed law.",
      "A Bill.",
      "A New proposal."
    ],
    "answer": 2
  },
  {
    "question": "46. What do you call the Sovereign’s representative in the provinces?",
    "options": [
      "Premier.",
      "Member of the Legislative Assembly.",
      "Lieutenant-Governor.",
      "Senator."
    ],
    "answer": 2
  },
  {
    "question": "47. What do you mark on a federal election ballot?",
    "options": [
      "The candidate\\'s name.",
      "The number for the candidate.",
      "An x",
      "The voter\\'s name."
    ],
    "answer": 2
  },
  {
    "question": "48. What does Confederation mean?",
    "options": [
      "The United States Confederate soldiers came to Canada.",
      "Joining of communities to become a province.",
      "Joining of suburbs to form a large city.",
      "Joining of provinces to make a new country."
    ],
    "answer": 3
  },
  {
    "question": "49. What does it mean to say Canada is a constitutional monarchy?",
    "options": [
      "The Sovereign (Queen or King) is the law maker of Canada.",
      "Canada's Head of State is a hereditary Sovereign (Queen or King) who reigns in accordance with the Constitution.",
      "The Sovereign (Queen or King) represents Canadians in Parliament.",
      "The Sovereign (Queen or King) approves bills before becoming law."
    ],
    "answer": 1
  },
  {
    "question": "50. What does the “right to a secret ballot” mean?",
    "options": [
      "No one should tell you where to vote",
      "A secret vote used by politicians when they are voting on sensitive topics",
      "No one can watch your vote and no one should look at how you voted",
      "Your right to vote in secret on who to appoint to the Senate"
    ],
    "answer": 2
  },
  {
    "question": "51. What does the Canadian flag look like?",
    "options": [
      "Red and white with provincial emblems.",
      "Red and white with a beaver.",
      "White with a red border on each end and a red maple leaf in the centre.",
      "Red with a white maple leaf."
    ],
    "answer": 2
  },
  {
    "question": "52. What does the term “responsible government” mean?",
    "options": [
      "Each person in each electoral district is responsible for voting.",
      "The Governor General is responsible for the actions of the Prime Minister.",
      "The ministers of the Crown must have the support of a majority of the elected representatives in order to govern.",
      "All Canadians are responsible for each other."
    ],
    "answer": 2
  },
  {
    "question": "53. What does the word “Inuit” mean?",
    "options": [
      "\"Eskimo\" in Inuktitut language.",
      "\"Home\" in English.",
      "\"The people\" in the Inuktitut language.",
      "\"The Arctic Land\" in Inuktitut language."
    ],
    "answer": 2
  },
  {
    "question": "54. What happened at the Battle of the Plains of Abraham?",
    "options": [
      "The Voyagers battled with the British for fur trading rights",
      "Americans fought the United Empire Loyalists during the American Revolution",
      "The British defeated the French marking the end of France's empire in America",
      "The French defeated the British in a battle for Quebec"
    ],
    "answer": 2
  },
  {
    "question": "55. What is a Francophone?",
    "options": [
      "A person who speaks English as their first language",
      "A smartphone designed by the Canadian company RIM",
      "A person who speaks French as their first language",
      "The first phone in Canada, invented by Alexander Graham Bell"
    ],
    "answer": 2
  },
  {
    "question": "56. What is a major river in Quebec?",
    "options": [
      "Fraser River",
      "St. Lawrence River",
      "Niagara",
      "Hudson's Bay."
    ],
    "answer": 1
  },
  {
    "question": "57. What is a majority government?",
    "options": [
      "When the party in power holds about one third of the seats in the House of Commons",
      "When the party in power holds about one quarter of the seats in the House of Commons.",
      "When the part in power holds at least half of the seats in the Senate.",
      "When the party in power holds at least half of the seats in the House of Commons."
    ],
    "answer": 3
  },
  {
    "question": "58. What is a voter information card?",
    "options": [
      "Tells you who the candidates are in your electoral district.",
      "Tells you what province to vote in.",
      "A form that tells you when and where to vote.",
      "A form that lets you know your voting time."
    ],
    "answer": 2
  },
  {
    "question": "59. What is Canada’s national winter sport?",
    "options": [
      "Golf.",
      "Nordic skiing.",
      "Lacrosse.",
      "Hockey."
    ],
    "answer": 3
  },
  {
    "question": "60. What is Canada’s system of government called?",
    "options": [
      "Dictatorship.",
      "Parliamentary government.",
      "Military Rule.",
      "Communism."
    ],
    "answer": 1
  },
  {
    "question": "61. What is meant by the equality of women and men?",
    "options": [
      "Men and women are equal under the law.",
      "Men and women must both do housework.",
      "Women may now go to school and enter the professional workforce.",
      "A woman may now become Prime Minister."
    ],
    "answer": 0
  },
  {
    "question": "62. What is the “head tax”?",
    "options": [
      "Race-based entry fee charged for Chinese entering Canada.",
      "Fee charged for anyone entering Canada after 1900.",
      "A tax imposed on beer beginning in 1867.",
      "Fee charged for moving westward in the early 1900s."
    ],
    "answer": 0
  },
  {
    "question": "63. What is the capital city of Canada?",
    "options": [
      "Ottawa.",
      "Toronto.",
      "Montreal.",
      "Hull."
    ],
    "answer": 0
  },
  {
    "question": "64. What is the difference between the role of the Sovereign and that of the Prime Minister?",
    "options": [
      "The Sovereign is Head of State, the Prime Minister oversees provincial policies.",
      "The Sovereign is the guardian of Constitutional freedoms, the Prime Minister selects the Cabinet ministers and is responsible for operations and policy of government.",
      "The Sovereign links Canada to 52 other nations and the Prime Minister is the guardian of Constitutional freedoms.",
      "The Sovereign is the symbol of Canadian sovereignty and the Prime Minister is her aide."
    ],
    "answer": 1
  },
  {
    "question": "65. What is the government of all of Canada called?",
    "options": [
      "National assembly.",
      "Legislature.",
      "Federal.",
      "Council."
    ],
    "answer": 2
  },
  {
    "question": "66. What is the highest court in Canada?",
    "options": [
      "The King\\'s Bench",
      "The Senate Court of Canada",
      "The Supreme Court of Canada",
      "The Crown Court of Canada"
    ],
    "answer": 2
  },
  {
    "question": "67. What is the highest military honour a Canadian can receive?",
    "options": [
      "Purple Cross.",
      "Badge of Courage.",
      "Order of Merit.",
      "Victoria Cross."
    ],
    "answer": 3
  },
  {
    "question": "68. What is the largest religious affiliation in Canada?",
    "options": [
      "Catholic.",
      "Muslim.",
      "Jewish.",
      "Hindu."
    ],
    "answer": 0
  },
  {
    "question": "69. What is the meaning of the Remembrance Day poppy?",
    "options": [
      "To remember our Sovereign, King Charles III.",
      "To celebrate Confederation.",
      "To honour Prime Ministers who have died.",
      "To remember the sacrifice of Canadians who have served or died in wars up to the present day."
    ],
    "answer": 3
  },
  {
    "question": "70. What is the name of the Governor General?",
    "options": [
      "David Johnston.",
      "Mary Simon.",
      "Richard Wagner.",
      "Julie Payette"
    ],
    "answer": 1
  },
  {
    "question": "71. What is the name of the Prime Minister of Canada and his/her party?",
    "options": [
      "Mark Carney (Liberal Party).",
      "Pierre Poilievre (Conservative Party).",
      "Jagmeet Singh (New Democratic Party).",
      "Pierre Trudeau (Liberal Party)."
    ],
    "answer": 0
  },
  {
    "question": "72. What is the name of the Royal Anthem of Canada?",
    "options": [
      "O Canada.",
      "God Save the Queen (or King).",
      "La Marseillaise",
      "The Star-Spangled Banner."
    ],
    "answer": 1
  },
  {
    "question": "73. What is the role of the courts in Canada?",
    "options": [
      "To enforce the law.",
      "To guide people in our society.",
      "To settle disputes.",
      "To express values and beliefs of Canadians."
    ],
    "answer": 2
  },
  {
    "question": "74. What is the role of the Opposition parties?",
    "options": [
      "To assist the Prime Minister.",
      "To sign bills.",
      "To oppose or try to improve government proposals.",
      "To put forward bills to be passed."
    ],
    "answer": 2
  },
  {
    "question": "75. What is the significance of the discovery of insulin by Sir Frederick Banting and Charles Best?",
    "options": [
      "Insulin is a hormone that permits you to eat anything you wish.",
      "Insulin has saved 16 million lives worldwide.",
      "Discovering insulin opened the doors to more discoveries.",
      "Discovering insulin made Drs. Banting and Best famous."
    ],
    "answer": 1
  },
  {
    "question": "76. What part of the Constitution legally protects the basic rights and freedoms of all Canadians?",
    "options": [
      "The British Charter of Rights and Freedoms.",
      "The Canadian Charter of Rights.",
      "The Canadian Charter of Freedoms.",
      "The Canadian Charter of Rights and Freedoms."
    ],
    "answer": 3
  },
  {
    "question": "77. What percentage of Aboriginal people are First Nations?",
    "options": [
      "30%.",
      "6%.",
      "50%.",
      "65%."
    ],
    "answer": 3
  },
  {
    "question": "78. What should you do if you do not receive a voter information card telling you when and where to vote?",
    "options": [
      "Go to the police station.",
      "Call your Member of Parliament.",
      "Assume you cannot vote.",
      "Call Elections Canada or visit their website."
    ],
    "answer": 3
  },
  {
    "question": "79. What song is Canada’s national anthem?",
    "options": [
      "God Save the King.",
      "O Canada.",
      "Star Spangled Banner.",
      "Amazing Grace."
    ],
    "answer": 1
  },
  {
    "question": "80. What three oceans border Canada?",
    "options": [
      "Atlantic, Arctic and Bering.",
      "Atlantic, Arctic and Pacific.",
      "Pacific, Indian and Atlantic.",
      "Hudson, Pacific and Atlantic."
    ],
    "answer": 1
  },
  {
    "question": "81. What was the “Underground Railroad”?",
    "options": [
      "An anti-slavery network that helped thousands of slaves escape the United States and settle in Canada",
      "A railroad through the Rockies that was mainly through mountain tunnels",
      "A network fur traders used to transport beaver pelts to the United States",
      "The first underground subway tunnel in Toronto"
    ],
    "answer": 0
  },
  {
    "question": "82. What was the significance of June 6, 1944 invasion of Normandy?",
    "options": [
      "It led to the establishment of the Juno Awards.",
      "It liberated North Africa from Nazi occupation.",
      "Canadians made a significant contribution to the defeat of Nazism and Fascism in Europe during the Second World War.",
      "It resulted in the forcible relocation of Canadians of Japanese origin."
    ],
    "answer": 2
  },
  {
    "question": "83. What was the Women’s Suffrage Movement?",
    "options": [
      "The effort by women to achieve the right to vote.",
      "The effort by women to participate in military service.",
      "An unsuccessful movement to get husbands to do housework.",
      "The effort by women to be in Parliament."
    ],
    "answer": 0
  },
  {
    "question": "84. What will you promise when you take the Oath of Citizenship?",
    "options": [
      "Pledge allegiance to the King, observe the laws of Canada and fulfil the duties of a Canadian.",
      "Pledge to be faithful to the King.",
      "Promise to observe the laws of Canada.",
      "Fulfil duties as a Canadian citizen."
    ],
    "answer": 0
  },
  {
    "question": "85. What year did Newfoundland and Labrador join Canada?",
    "options": [
      "1867",
      "1955",
      "1949",
      "1880"
    ],
    "answer": 2
  },
  {
    "question": "86. What year was Confederation?",
    "options": [
      "1867.",
      "1871.",
      "1898.",
      "1864."
    ],
    "answer": 0
  },
  {
    "question": "87. When asked, who must you tell how you voted in a federal election?",
    "options": [
      "Your employer.",
      "No one.",
      "A police officer.",
      "An Elections Canada official."
    ],
    "answer": 1
  },
  {
    "question": "88. When did the British North America Act come into effect?",
    "options": [
      "1871.",
      "1898.",
      "1867.",
      "1905."
    ],
    "answer": 2
  },
  {
    "question": "89. When did the Canadian Charter of Rights and Freedoms become part of the Canadian Constitution?",
    "options": [
      "1867.",
      "1905.",
      "1982.",
      "1878."
    ],
    "answer": 2
  },
  {
    "question": "90. When is Canada Day and what does it celebrate?",
    "options": [
      "June 15 of each year to celebrate the anniversary of Confederation.",
      "August 8th of each year to celebrate the joining of British Columbia to Confederation.",
      "We celebrate the anniversary of Confederation July 1st of each year.",
      "May 21st of each year to remember Queen Victoria."
    ],
    "answer": 2
  },
  {
    "question": "91. When is Remembrance Day celebrated?",
    "options": [
      "July 1st",
      "October 1st.",
      "November 11th.",
      "December 25th"
    ],
    "answer": 2
  },
  {
    "question": "92. When must federal elections be held?",
    "options": [
      "About every 4 years.",
      "On the third Monday in October every four years following the most recent general election.",
      "Whenever the Prime Minister calls the election.",
      "When the MPs want a new Prime Minister."
    ],
    "answer": 1
  },
  {
    "question": "93. When you vote on election day, what do you do?",
    "options": [
      "Go to the voting station, tell them who you are and mark your X.  Give the ballot back to the attendant.",
      "Go to the voting station, remove 1 ballot and after marking your X deposit it in the ballot box.",
      "Go to the voting station, take your voter\\'s card with proof if identity, highlight your choice on the ballot and deposit it in the box.",
      "Go to the voting station with your voter\\'s card and ID, mark an X next to your chosen candidate, fold the ballot and present it to the poll officials who will tear off the ballot number and give you the ballot to deposit in the box"
    ],
    "answer": 3
  },
  {
    "question": "94. Where are the Great Lakes?",
    "options": [
      "Between Ontario and the United States",
      "Manitoba.",
      "Northern Quebec.",
      "Atlantic Canada."
    ],
    "answer": 0
  },
  {
    "question": "95. Where are the Parliament Buildings located?",
    "options": [
      "Ottawa.",
      "Quebec City.",
      "Hull.",
      "Toronto."
    ],
    "answer": 0
  },
  {
    "question": "96. Where do most French-speaking Canadians live?",
    "options": [
      "Ontario.",
      "Nova Scotia.",
      "Quebec.",
      "Prince Edward Island."
    ],
    "answer": 2
  },
  {
    "question": "97. Where does Canada rank in the world’s largest countries?",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "answer": 1
  },
  {
    "question": "98. Which Act granted, for the first time in Canada, legislative assemblies elected by the people?",
    "options": [
      "The Constitutional Act of 1867.",
      "The Constitutional Act of 1791.",
      "The Constitutional Act of 1982.",
      "The Constitutional Act of 2010."
    ],
    "answer": 1
  },
  {
    "question": "99. Which animal is an official symbol of Canada?",
    "options": [
      "The moose.",
      "The hawk.",
      "The beaver.",
      "The deer."
    ],
    "answer": 2
  },
  {
    "question": "100. Which country borders Canada on the south?",
    "options": [
      "United States of America.",
      "Central America.",
      "Mexico.",
      "Washington."
    ],
    "answer": 0
  },
  {
    "question": "101. Which federal political party is in power?",
    "options": [
      "Green Party.",
      "New Democratic Party.",
      "Liberal Party.",
      "Conservative Party."
    ],
    "answer": 2
  },
  {
    "question": "102. Which of the following is NOT a feature of Canada’s system of government?",
    "options": [
      "A federal state.",
      "Parliamentary democracy.",
      "Constitutional Monarchy.",
      "Dictatorship."
    ],
    "answer": 3
  },
  {
    "question": "103. Which of the following sentences best describes the War of 1812?",
    "options": [
      "Napoleon's fleet was defeated by the Royal Navy in the war.",
      "The USA became independent from the British Empire after the war.",
      "The USA invaded Canada and was defeated, which ensured that Canada would remain independent of the United States.",
      "Canada joined the United States after the war."
    ],
    "answer": 2
  },
  {
    "question": "104. Which of the following statements about residential schools is NOT true?",
    "options": [
      "The federal government placed many Aboriginal children in residential schools to educate and assimilate them into mainstream Canadian culture.",
      "The schools were poorly funded and inflicted hardship on the students.",
      "The schools were welcomed by the Aboriginal people.",
      "Aboriginal language and cultural practices were mostly prohibited."
    ],
    "answer": 2
  },
  {
    "question": "105. Which party becomes the Official Opposition?",
    "options": [
      "The party with the second most MPs.",
      "The party receiving the least votes.",
      "Any independent candidate.",
      "The party the Prime Minister selects."
    ],
    "answer": 0
  },
  {
    "question": "106. Which party is the Official Opposition at the federal level?",
    "options": [
      "The New Democratic Party.",
      "The Liberal Party.",
      "The Independent Party.",
      "The Conservative Party."
    ],
    "answer": 3
  },
  {
    "question": "107. Which port is the largest and busiest in Canada?",
    "options": [
      "The Port of Halifax",
      "The Port of Montreal",
      "The Port of Vancouver",
      "The Port of Victoria"
    ],
    "answer": 2
  },
  {
    "question": "108. Which province has its own time zone?",
    "options": [
      "British Columbia",
      "Newfoundland and Labrador",
      "Nunavut",
      "Nova Scotia"
    ],
    "answer": 1
  },
  {
    "question": "109. Which province in Canada is the smallest in land size?",
    "options": [
      "Nova Scotia.",
      "Prince Edward Island.",
      "Yukon Territory.",
      "Newfoundland and Labrador."
    ],
    "answer": 1
  },
  {
    "question": "110. Which province is the main producer of pulp and paper and hydro-electricity?",
    "options": [
      "Quebec",
      "Ontario",
      "British Columbia",
      "Manitoba"
    ],
    "answer": 0
  },
  {
    "question": "111. Which province is the only officially bilingual province?",
    "options": [
      "New Brunswick.",
      "Quebec.",
      "Ontario.",
      "Prince Edward Island."
    ],
    "answer": 0
  },
  {
    "question": "112. Which province was split into two at Confederation?",
    "options": [
      "Lower Canada",
      "Newfoundland",
      "Upper Canada",
      "The Province of Canada"
    ],
    "answer": 3
  },
  {
    "question": "113. Which province was the first to grant voting rights to women?",
    "options": [
      "Quebec",
      "Ontario",
      "Nova Scotia",
      "Manitoba"
    ],
    "answer": 3
  },
  {
    "question": "114. Which provincial flag features the fleur-de-lys?",
    "options": [
      "Quebec",
      "New Brunswick",
      "Manitoba",
      "Ontario"
    ],
    "answer": 0
  },
  {
    "question": "115. Which region covers more than one-third of Canada?",
    "options": [
      "Central Canada.",
      "Prairies.",
      "Atlantic Canada.",
      "Northern Territories."
    ],
    "answer": 3
  },
  {
    "question": "116. Which region is known as the industrial and manufacturing heartland of Canada?",
    "options": [
      "Atlantic provinces.",
      "Prairie provinces.",
      "Central Canada.",
      "West Coast."
    ],
    "answer": 2
  },
  {
    "question": "117. Which region of Canada is known for both its fertile agricultural land and valuable energy resources?",
    "options": [
      "British Columbia.",
      "Prairie provinces.",
      "Ontario.",
      "Manitoba."
    ],
    "answer": 1
  },
  {
    "question": "118. Which three countries are signatories to NAFTA?",
    "options": [
      "Canada, the United Kingdom and the United States.",
      "Canada, the United States and Japan.",
      "Canada, Mexico and the United States.",
      "Canada, Denmark and Andorra."
    ],
    "answer": 2
  },
  {
    "question": "119. Which was the last province to join Canada?",
    "options": [
      "Newfoundland.",
      "Alberta.",
      "Saskatchewan.",
      "British Columbia."
    ],
    "answer": 0
  },
  {
    "question": "120. Who are the Aboriginal peoples of Canada?",
    "options": [
      "The first European settlers to arrive in Canada",
      "The descendents of the first Australian immigrants to Canada",
      "The first people to live in Canada",
      "The first settlers of Newfoundland"
    ],
    "answer": 2
  },
  {
    "question": "121. Who are the Acadians?",
    "options": [
      "Aboriginal people of the arctic.",
      "French-speaking Catholics living in Ontario.",
      "The descendants of French colonists who began settling in what are now the Maritime provinces in 1604.",
      "English speaking refugees who settled in Louisiana."
    ],
    "answer": 2
  },
  {
    "question": "122. Who are the founding peoples of Canada?",
    "options": [
      "Métis, French and British.",
      "Aboriginal, Métis and British.",
      "Inuit, Aboriginal and British.",
      "Aboriginal, French and British."
    ],
    "answer": 3
  },
  {
    "question": "123. Who are the Métis?",
    "options": [
      "The distinct aboriginal people of Atlantic Canada.",
      "A people of mixed Inuit/First Nations ancestry most of whom live on the Prairies.",
      "First Nations people speaking the Michif dialect.",
      "A distinct people of mixed Aboriginal and European ancestry."
    ],
    "answer": 3
  },
  {
    "question": "124. Who are the Quebecers?",
    "options": [
      "European settlers in the 1600s.",
      "Descendants of the French colonists.",
      "Descendants of the Anglophones.",
      "People of Quebec."
    ],
    "answer": 3
  },
  {
    "question": "125. Who do Canadians vote for in a federal election?",
    "options": [
      "The best speaker running in the election.",
      "A candidate they want to represent them in Parliament.",
      "Someone to become the Premier.",
      "All of the candidates in their electoral district."
    ],
    "answer": 1
  },
  {
    "question": "126. Who do Members of Parliament represent?",
    "options": [
      "All of the Canadians living in the north.",
      "Only Canadians living in Central Canada.",
      "Everyone who lives in his or her electoral district.",
      "Canadians living in the province in which he/she was elected."
    ],
    "answer": 2
  },
  {
    "question": "127. Who had played an important part in building the Canadian Pacific Railway (CPR)?",
    "options": [
      "American railroad engineers.",
      "Acadian railroad workers.",
      "Chinese railroad workers.",
      "African American slaves."
    ],
    "answer": 2
  },
  {
    "question": "128. Who has the right to run as a candidate in federal elections?",
    "options": [
      "Anyone.",
      "A Canadian citizen who is 16 years old.",
      "Any man who is at least 18 years old.",
      "Any Canadian citizen who is at least 18 years old."
    ],
    "answer": 3
  },
  {
    "question": "129. Who has the right to vote in federal elections?",
    "options": [
      "A Canadian citizen, 18 years or older, and on voters' list.",
      "A Canadian citizen, 18 years or older and must work for the federal government.",
      "A landed immigrant, 18 years old and a memberof the Canadian Forces.",
      "A Canadian citizen, over 25 years and a member of the Canadian Forces."
    ],
    "answer": 0
  },
  {
    "question": "130. Who have major responsibilities on First Nations reserves?",
    "options": [
      "Band chiefs and councillors.",
      "Municipal governments.",
      "Provincial and territorial governments.",
      "Federal government."
    ],
    "answer": 0
  },
  {
    "question": "131. Who is Canada’s Head of State?",
    "options": [
      "Governor General of Canada.",
      "His Majesty King Charles III.",
      "Prime Minister.",
      "Lieutenant Governor."
    ],
    "answer": 1
  },
  {
    "question": "132. Who is considered the father of Manitoba?",
    "options": [
      "John A. Macdonald",
      "Sam Steele",
      "Alfred Boyd",
      "Louis Riel"
    ],
    "answer": 3
  },
  {
    "question": "133. Who is General Sir Arthur Currie?",
    "options": [
      "A military leader of the Métis in the 19th century.",
      "A great frontier hero.",
      "An explorer of western Canada.",
      "Canada's greatest soldier in the First World War."
    ],
    "answer": 3
  },
  {
    "question": "134. Who is the Head of Government?",
    "options": [
      "The President",
      "The King",
      "The Governor General",
      "The Prime Minister"
    ],
    "answer": 3
  },
  {
    "question": "135. Who is the King’s representative in Canada?",
    "options": [
      "Prime Minister of Canada.",
      "Premier.",
      "Lieutenant-Governor.",
      "Governor General of Canada."
    ],
    "answer": 3
  },
  {
    "question": "136. Who is the leader of the Federal Official Opposition Party?",
    "options": [
      "Thomas Mulcair",
      "Andrew Scheer",
      "Pierre Poilievre",
      "Elizabeth May"
    ],
    "answer": 2
  },
  {
    "question": "137. Who led an armed uprising and seized Fort Garry?",
    "options": [
      "John A. Macdonald",
      "Louis Riel",
      "Sam Steele",
      "George-Étienne Cartier"
    ],
    "answer": 1
  },
  {
    "question": "138. Who led Quebec into Confederation?",
    "options": [
      "Sir Louis-Hippolyte La Fontaine",
      "Sir George-Étienne Cartier",
      "Sir Wilfrid Laurier",
      "Sir John A. Macdonald"
    ],
    "answer": 1
  },
  {
    "question": "139. Who was Sir Louis-Hippolyte La Fontaine?",
    "options": [
      "A champion of democracy and Aboriginal rights.",
      "A champion of democracy and French language rights and the first leader of a responsible government in the Canadas.",
      "The first Head of State.",
      "The first French speaking Prime Minister."
    ],
    "answer": 1
  },
  {
    "question": "140. Who was Sir Sam Steele?",
    "options": [
      "A great frontier hero, Mounted Policeman and soldier.",
      "A military leader of the Métis in the 19th century.",
      "The first Prime Minister of Canada.",
      "The Father of Manitoba."
    ],
    "answer": 0
  },
  {
    "question": "141. Who was the first leader of a responsible government in the Canadas in 1849?",
    "options": [
      "Sir John A. Macdonald.",
      "Robert Baldwin.",
      "Louis Riel.",
      "Sir Louis-Hippolyte La Fontaine."
    ],
    "answer": 3
  },
  {
    "question": "142. Who was the first Prime Minister of Canada?",
    "options": [
      "Louis Riel.",
      "Sir John A. Macdonald.",
      "Lester B. Pearson.",
      "Abraham Lincoln."
    ],
    "answer": 1
  },
  {
    "question": "143. Who were the United Empire Loyalists?",
    "options": [
      "Settlers who came to Canada from the United States during the American Revolution.",
      "Aboriginal peoples.",
      "Métis",
      "Inuit."
    ],
    "answer": 0
  },
  {
    "question": "144. Who were the Voyagers?",
    "options": [
      "Montreal-based traders who travelled by canoe",
      "Immigrants to Canada in the 18th Century",
      "Explorers searching for the North-West Passage",
      "Geographers who first charted the coastline of British Columbia"
    ],
    "answer": 0
  },
  {
    "question": "145. Why is the battle of Vimy Ridge important?",
    "options": [
      "It was a key position of the German line in Northern Spain.",
      "Canadian Corps secured its reputation for valour and bravery.",
      "It was the \"hinge\" of the German line as it protected the newly constructed Hindenburg line.",
      "Once Canadians fought at Vimy they knew they would be heading home."
    ],
    "answer": 1
  },
  {
    "question": "146. Why is trade with other countries important to Canada?",
    "options": [
      "It enhances our standard of living.",
      "It makes it easier for us to travel to foreign countries.",
      "It enhances our economy and raises our standard of living.",
      "It brings in cheaper goods."
    ],
    "answer": 2
  },
  {
    "question": "147. What is the name of the leader of the Opposition in Quebec?",
    "options": [
      "Dominique Anglade",
      "Marc Tanguay",
      "Jean-Marc Fournie",
      "Philippe Couillard"
    ],
    "answer": 1
  },
  {
    "question": "148. What is the name of the Lieutenant-Governor of Quebec?",
    "options": [
      "Honourable Pierre Duchesne",
      "Honourable Manon Jeannotte",
      "Honourable Martial Asselin",
      "Honourable J. Michel Doyon"
    ],
    "answer": 1
  },
  {
    "question": "149. What is the capital city of Alberta?",
    "options": [
      "Medicine Hat.",
      "Red Deer.",
      "Calgary.",
      "Edmonton."
    ],
    "answer": 3
  },
  {
    "question": "150. What is the name of the leader of the Opposition in Alberta?",
    "options": [
      "Rachel Notley.",
      "Naheed K. Nenshi",
      "Heather Forsyth.",
      "Jim Prentice."
    ],
    "answer": 1
  },
  {
    "question": "151. What is the name of the Lieutenant-Governor of Alberta?",
    "options": [
      "Donald S. Ethell.",
      "Salma Lakhani.",
      "Adrienne Clarkson.",
      "Lois Mitchell."
    ],
    "answer": 1
  },
  {
    "question": "152. What is the name of the Premier of Alberta?",
    "options": [
      "Premier Rachel Notley.",
      "Premier Jason Kenney.",
      "Premier Danielle Smith.",
      "Premier Stephen Harper"
    ],
    "answer": 2
  },
  {
    "question": "153. Which political party is in power in Alberta?",
    "options": [
      "New Democratic Party.",
      "Liberal Party.",
      "Green Party.",
      "United Conservative Party"
    ],
    "answer": 3
  },
  {
    "question": "154. Which three natural resources are important to Alberta’s economy today?",
    "options": [
      "Oil, agriculture, and forestry.",
      "Oil, tourism, and fishing.",
      "Oil, coal, and hydroelectricity.",
      "Oil, coal, and forestry."
    ],
    "answer": 0
  },
  {
    "question": "155. Name the federal electoral districts in Richmond, British Columbia.",
    "options": [
      "Richmond has two federal electoral districts: Richmond North and Richmond South",
      "Richmond has two federal electoral districts: Richmond East and Richmond West",
      "Richmond has two federal electoral districts: Richmond and Richmond South.",
      "Richmond has two federal electoral districts: Richmond Centre and Steveston-Richmond East"
    ],
    "answer": 3
  },
  {
    "question": "156. Name the members of Parliament for Richmond, British Columbia and the parties they belong to (Richmond Centre, Steveston-Richmond East respectively).",
    "options": [
      "Alice Wong (Conservative), Kenny Chiu (Conservative)",
      "Joe Peschisolido (Liberal), Kerry-Lynne Findlay (Conservative)",
      "Chak Au (Conservative), Parm Bains (Liberal)",
      "Greg Halsey-Brandt (Liberal), Geoff Plant (Liberal)"
    ],
    "answer": 2
  },
  {
    "question": "157. Name the Members of the Legislative Assembly for Richmond, British Columbia and the parties they belong to (Richmond North Centre, Richmond South Centre, Richmond-Steveston, and Richmond-Queensborough respectively).",
    "options": [
      "Rob Howard (Liberal), Linda Reid (Liberal), John Cummins (Conservative), and John Yap (Liberal).",
      "Teresa Wat (BC United), Linda Reid (Liberal), John Yap (Liberal), and Jas Johal (Liberal).",
      "Olga Ilich (Liberal), Henry Yao (NDP), Jas Johal (Liberal), and John Yap (Liberal).",
      "Teresa Wat (Conservative Party of BC), Hon Chan (Conservative Party of BC), Kelly Greene (NDP), and Steve Kooner (Conservative Party of BC)"
    ],
    "answer": 3
  },
  {
    "question": "158. Name three city councillors for Richmond, British Columbia.",
    "options": [
      "Malcolm Brodie, Derek Dang and Ernie Novakowski",
      "Lyn Greenhill, Kiichi Kumagai and Lily von Hendron",
      "Michael Wolfe, Chak Au and Carol Day",
      "Ken Johnston, Bill McNulty and Harold Steves"
    ],
    "answer": 2
  },
  {
    "question": "159. What is the capital city of British Columbia?",
    "options": [
      "Vancouver.",
      "Prince George.",
      "Victoria.",
      "New Westminster."
    ],
    "answer": 2
  },
  {
    "question": "160. What is the name of the leader of the Opposition in British Columbia?",
    "options": [
      "Adam Olsen",
      "John Rustad",
      "Kevin Falcon",
      "Andrew Wilkinson"
    ],
    "answer": 1
  },
  {
    "question": "161. What is the name of the Lieutenant-Governor of British Columbia?",
    "options": [
      "David Lam",
      "Wendy Cocchia",
      "Adrienne Clarkson",
      "Judith Guichon"
    ],
    "answer": 1
  },
  {
    "question": "162. What is the name of the Mayor of Richmond, British Columbia?",
    "options": [
      "Mayor Richard Lee",
      "Mayor Bill McNulty",
      "Mayor Linda McPhail",
      "Mayor Malcolm Brodie"
    ],
    "answer": 3
  },
  {
    "question": "163. What is the name of the Premier of British Columbia?",
    "options": [
      "Premier Adrian Dix",
      "Premier David Eby",
      "Premier John Horgan",
      "Premier Christy Clark"
    ],
    "answer": 1
  },
  {
    "question": "164. Which political party is in power in British Columbia?",
    "options": [
      "New Democratic Party",
      "Liberal Party",
      "Social Credit Party",
      "Green Party"
    ],
    "answer": 0
  },
  {
    "question": "165. Which three natural resources are important to British Columbia’s economy today?",
    "options": [
      "Forests, water and grain crops.",
      "Forests, fish and water.",
      "Fish, oil and water.",
      "Coal, water and shipbuilding."
    ],
    "answer": 1
  },
  {
    "question": "166. Why is British Columbia known as Canada’s Pacific Gateway?",
    "options": [
      "Most new imigrants arrive at Vancouver International Airport.",
      "British Columbia is the closest province to the Far East.",
      "Billions of dollars in trade goods are handled through the Port of Vancouver.",
      "British Columbia borders the Pacific Ocean."
    ],
    "answer": 2
  },
  {
    "question": "167. What is the capital city of Manitoba?",
    "options": [
      "Winnipeg",
      "Grand Rapids",
      "Portage la Prairie",
      "Brandon"
    ],
    "answer": 0
  },
  {
    "question": "168. What is the name of the leader of the Opposition in Manitoba?",
    "options": [
      "Obby Khan",
      "Heather Stefanson",
      "Wab Kinew",
      "Brian Pallister"
    ],
    "answer": 0
  },
  {
    "question": "169. What is the name of the Lieutenant-Governor of Manitoba?",
    "options": [
      "Honourable Anita Neville",
      "Honourable Peter Liba",
      "Honourable Philip Lee",
      "Honourable Janice Filmon"
    ],
    "answer": 0
  },
  {
    "question": "170. What is the name of the Premier of Manitoba?",
    "options": [
      "Premier Heather Stefanson",
      "Premier Wab Kinew",
      "Premier Brian Pallister",
      "Premier Sterling Lyon"
    ],
    "answer": 1
  },
  {
    "question": "171. What three industries are important to Manitoba’s economy today?",
    "options": [
      "Farming, mining and fishing",
      "Agriculture, mining and hydro-electric power generation",
      "Fishing, tourism and mining",
      "Forestry, fishing and energy"
    ],
    "answer": 1
  },
  {
    "question": "172. Which political party is in power in Manitoba?",
    "options": [
      "Manitoba Party",
      "Liberals",
      "Progressive Conservative",
      "New Democratic Party"
    ],
    "answer": 3
  },
  {
    "question": "173. What is the capital city of New Brunswick?",
    "options": [
      "Victoria",
      "Winnipeg",
      "Fredericton",
      "Montreal"
    ],
    "answer": 2
  },
  {
    "question": "174. What is the name of the leader of the Opposition in New Brunswick?",
    "options": [
      "Victor Boudreau",
      "Denis Landry",
      "Glen Savoie",
      "David Alward"
    ],
    "answer": 2
  },
  {
    "question": "175. What is the name of the Lieutenant-Governor of New Brunswick?",
    "options": [
      "Honourable Louise Imbeault",
      "Honourable Gilbert Finn",
      "Honourable Marilyn Trenholme Counsell",
      "Honourable Graydon Nicholas"
    ],
    "answer": 0
  },
  {
    "question": "176. What is the name of the Premier of New Brunswick?",
    "options": [
      "Premier Bernard Lord",
      "Premier Susan Holt",
      "Premier David Alward",
      "Premier Brian Gallant"
    ],
    "answer": 1
  },
  {
    "question": "177. What three industries are important to New Brunswick’s economy today?",
    "options": [
      "Forestry, hydro-electric power generation, oil",
      "Fisheries, oil, tourism",
      "Atlantic trade, fishing and oil",
      "Forestry, agriculture and mining"
    ],
    "answer": 3
  },
  {
    "question": "178. Which political party is in power in New Brunswick?",
    "options": [
      "Liberal party of New Brunswick",
      "New Brunswick Party",
      "New Democrats",
      "Progressive Conservative"
    ],
    "answer": 0
  },
  {
    "question": "179. What is the capital city of Newfoundland and Labrador?",
    "options": [
      "Charlottetown",
      "Chimney Tickle",
      "St. John's",
      "St. Pierre et Miquelon"
    ],
    "answer": 2
  },
  {
    "question": "180. What is the name of the leader of the Opposition in Newfoundland and Labrador?",
    "options": [
      "David Brazil",
      "John Hogan",
      "Paul Davis",
      "Dwight Ball"
    ],
    "answer": 1
  },
  {
    "question": "181. What is the name of the Lieutenant-Governor of Newfoundland and Labrador?",
    "options": [
      "Honourable Frank F. Fagan",
      "Honourable Edward Roberts",
      "Honourable Joan Marie Aylward",
      "Honourable Judy May Foote"
    ],
    "answer": 2
  },
  {
    "question": "182. What is the name of the Premier of Newfoundland and Labrador?",
    "options": [
      "Premier John Hogan",
      "Premier Tony Wakeham",
      "Premier Kathy Dunderdale",
      "Premier Tom Marshall"
    ],
    "answer": 1
  },
  {
    "question": "183. What three industries are important to Newfoundland and Labrador’s economy today?",
    "options": [
      "Fisheries, oil and gas extraction",
      "Fisheries, tourism, forestry",
      "Shipbuilding, fisheries and mining",
      "Tourism, mining and forestry"
    ],
    "answer": 0
  },
  {
    "question": "184. Which political party is in power in Newfoundland and Labrador?",
    "options": [
      "NFL Party",
      "New Democrats",
      "Liberal Party",
      "Progressive Conservative"
    ],
    "answer": 3
  },
  {
    "question": "185. What is the capital City of Nova Scotia?",
    "options": [
      "Shearwater",
      "Halifax",
      "Dartmouth",
      "Devon"
    ],
    "answer": 1
  },
  {
    "question": "186. What is the name of the leader of the Opposition in Nova Scotia?",
    "options": [
      "Darrell Dexter",
      "John MacDonell",
      "Claudia Chender",
      "Jamie Baillie"
    ],
    "answer": 2
  },
  {
    "question": "187. What is the name of the Lieutenant-Governor of Nova Scotia?",
    "options": [
      "Honourable John James Grant",
      "Honourable Myra Freeman",
      "Honourable  Mayann Francis",
      "Honourable Mike Savage"
    ],
    "answer": 3
  },
  {
    "question": "188. What is the name of the Premier of Nova Scotia?",
    "options": [
      "Premier Darrel Dexter",
      "Premier Stephen McNeil",
      "Premier Tim Houston",
      "Premier Rodney MacDonald"
    ],
    "answer": 2
  },
  {
    "question": "189. What three industries are important to Nova Scotia’s economy today?",
    "options": [
      "Fisheries, shipbuilding and forestry",
      "Forestry, mining and tourism",
      "Coal mining, forestry and agriculture",
      "Tourism, movies and shipbuilding"
    ],
    "answer": 2
  },
  {
    "question": "190. Which political party is in power in Nova Scotia?",
    "options": [
      "New Democrats",
      "Progressive Conservative",
      "Liberal",
      "Nova Scotia Party"
    ],
    "answer": 1
  },
  {
    "question": "191. What is the capital City of the Northwest Territories?",
    "options": [
      "Fort Simpson",
      "Hay River",
      "Fort Providence",
      "Yellowknife"
    ],
    "answer": 3
  },
  {
    "question": "192. What is the name of the Commissioner of the Northwest Territories?",
    "options": [
      "Honourable Margaret Thom",
      "Honourable Gerry Kisoun",
      "Honourable Daniel L. Norris",
      "Honourable Glenna Hansen"
    ],
    "answer": 1
  },
  {
    "question": "193. What is the name of the leader of the Opposition in the Northwest Territories?",
    "options": [
      "None",
      "George Braden",
      "Don Morin",
      "Nellie Cournoyea"
    ],
    "answer": 0
  },
  {
    "question": "194. What is the name of the Premier of the Northwest Territories?",
    "options": [
      "Premier Bob McLeod",
      "Premier Caroline Cochrane",
      "Premier R.J. Simpson",
      "Premier Jim Antoine"
    ],
    "answer": 2
  },
  {
    "question": "195. Which political party is in power in the Northwest Territories?",
    "options": [
      "Yukon Party",
      "Liberals",
      "Governed by consensus",
      "New Democrats"
    ],
    "answer": 2
  },
  {
    "question": "196. What is the capital City of the Nunavut?",
    "options": [
      "Sinaa",
      "Iqaluit",
      "Nipisa",
      "Mivvik"
    ],
    "answer": 1
  },
  {
    "question": "197. What is the name of the Commissioner of Nunavut?",
    "options": [
      "Honourable Peter Irniq",
      "Honourable Ann Meekitjuk Hanson",
      "Honourable Eva Aariak",
      "Honourable Nellie Taptaqut Kusugak"
    ],
    "answer": 2
  },
  {
    "question": "198. What is the name of the leader of the Opposition in Nunavut?",
    "options": [
      "Don Morin",
      "Joe Handley",
      "None",
      "Eva Aariak"
    ],
    "answer": 2
  },
  {
    "question": "199. What is the name of the Premier of Nunavut?",
    "options": [
      "Premier Paul Okalik",
      "Premier Floyd Roalnd",
      "Premier Joe Savikataaq",
      "Premier P.J. Akeeagok"
    ],
    "answer": 3
  },
  {
    "question": "200. Which political party is in power in Nunavut?",
    "options": [
      "Progressive Conservative",
      "Liberal",
      "Nunavut Party",
      "Governed by consensus"
    ],
    "answer": 3
  },
  {
    "question": "201. What is the capital city of Ontario?",
    "options": [
      "Kingston",
      "Ottawa",
      "Toronto",
      "London"
    ],
    "answer": 2
  },
  {
    "question": "202. What is the name of the leader of the Opposition in Ontario?",
    "options": [
      "Andrea Horwath",
      "Marit Stiles",
      "Peter Tabuns",
      "Dalton McGuinty"
    ],
    "answer": 1
  },
  {
    "question": "203. What is the name of the Lieutenant-Governor of Ontario?",
    "options": [
      "James Bartleman",
      "Elizabeth Dowdeswell",
      "David C. Onley",
      "Edith Dumont"
    ],
    "answer": 3
  },
  {
    "question": "204. What is the name of the Premier of Ontario?",
    "options": [
      "Premier Doug Ford",
      "Premier Jack Layton",
      "Premier Kathleen Wynne",
      "Premier Mike Harris"
    ],
    "answer": 0
  },
  {
    "question": "205. What three industries are important to Ontario’s economy today?",
    "options": [
      "Mining, fishing, automobile manufacturing",
      "Mining, tourism, automobile manufacturing",
      "Farming, tourism, fishing",
      "Automobile manufacturing, tourism, fishing"
    ],
    "answer": 1
  },
  {
    "question": "206. Which political party is in power in Ontario?",
    "options": [
      "Green Party",
      "Liberal Party",
      "Progressive Conservative Party",
      "New Democratic Party"
    ],
    "answer": 2
  },
  {
    "question": "207. What is the capital City of the Prince Edward Island?",
    "options": [
      "Cornwall",
      "Stratford",
      "Charlottetown",
      "Georgetown"
    ],
    "answer": 2
  },
  {
    "question": "208. What is the name of the leader of the Opposition in Prince Edward Island?",
    "options": [
      "Hal Perry",
      "Jamie Fox",
      "Steven Meyers",
      "Peter Bevan-Baker"
    ],
    "answer": 0
  },
  {
    "question": "209. What is the name of the Lieutenant-Governor of Prince Edward Island?",
    "options": [
      "Honourable Dr. Wassim Salamoun",
      "Honourable H. Frank Lewis",
      "Honourable Barbara Oliver Hagerman",
      "Honourable Léonce Barnard"
    ],
    "answer": 0
  },
  {
    "question": "210. What is the name of the Premier of Prince Edward Island?",
    "options": [
      "Premier Wade MacLauchlan",
      "Premier Rob Lantz",
      "Premier Pat Binns",
      "Premier Joe Ghiz"
    ],
    "answer": 1
  },
  {
    "question": "211. Which political party is in power in Prince Edward Island?",
    "options": [
      "Progressive Conservative",
      "New Democrats",
      "Liberals",
      "Union Nationale"
    ],
    "answer": 0
  },
  {
    "question": "212. What is the capital City of the Quebec?",
    "options": [
      "Beauport",
      "Quebec City",
      "Montreal",
      "Chicoutimi"
    ],
    "answer": 1
  },
  {
    "question": "213. What is the name of the Premier of Quebec ?",
    "options": [
      "Premier Lucien Bouchard",
      "Premier Pauline Marois",
      "Premier Francois Legault",
      "Premier Philippe Couillard"
    ],
    "answer": 2
  },
  {
    "question": "214. What three industries are important to Quebec’s economy today?",
    "options": [
      "Tourism, mining and forestry",
      "Pulp and paper, forestry and hydro-electric power",
      "Films, fishing and mining",
      "Forestry, shipping and tourism"
    ],
    "answer": 1
  },
  {
    "question": "215. Which political party is in power in Quebec?",
    "options": [
      "Coalition Avenir Québec",
      "Parti libéral",
      "Parti Quebecois",
      "Union Nationale"
    ],
    "answer": 0
  },
  {
    "question": "216. What is the capital city of Saskatchewan?",
    "options": [
      "Regina",
      "Avonlea",
      "Glenavon",
      "Fort Qu'Appelle"
    ],
    "answer": 0
  },
  {
    "question": "217. What is the name of the leader of the Opposition in Saskatchewan?",
    "options": [
      "Ryan Meili",
      "Carla Beck",
      "John Nilson",
      "Cam Broten"
    ],
    "answer": 1
  },
  {
    "question": "218. What is the name of the Lieutenant-Governor of Saskatchewan?",
    "options": [
      "Honourable Dr. Gordon L. Barnhart",
      "Honourable Vaughn Solomon Schofield",
      "Honourable M. Bernadette McIntyre",
      "Honourable Lynda Maureen Haverstock"
    ],
    "answer": 2
  },
  {
    "question": "219. What is the name of the Premier of Saskatchewan?",
    "options": [
      "Premier Lorne Calvert",
      "Premier Brad Wall",
      "Premier Scott Moe",
      "Premier Len Taylor"
    ],
    "answer": 2
  },
  {
    "question": "220. What three industries are important to Saskatchewan’s economy today?",
    "options": [
      "Forestry, films and tourism",
      "Fishing, mining and agriculture",
      "Mining, oil production and forestry",
      "Farming, mining and natural gas"
    ],
    "answer": 3
  },
  {
    "question": "221. Which political party is in power in Saskatchewan?",
    "options": [
      "NDP",
      "Saskatchewan Party",
      "Progressive Conservative",
      "Social Credit"
    ],
    "answer": 1
  },
  {
    "question": "222. What is the capital city of Yukon Territory?",
    "options": [
      "MacRae",
      "Crestview",
      "Whitehorse",
      "Riverdale"
    ],
    "answer": 2
  },
  {
    "question": "223. What is the name of the Commissioner of Yukon Territory?",
    "options": [
      "Honourable Doug Phillips",
      "Honourable Angélique Bernard",
      "Honourable Adeline Webber",
      "Honourable Douglas Bell"
    ],
    "answer": 2
  },
  {
    "question": "224. What is the name of the leader of the Opposition in Yukon Territory?",
    "options": [
      "Trevor Harding",
      "Currie Dixon",
      "Stacey Hassard",
      "Arthur Mitchell"
    ],
    "answer": 1
  },
  {
    "question": "225. What is the name of the Premier of Yukon Territory?",
    "options": [
      "Premier Dennis Fentie",
      "Premier Bob McLeod",
      "Premier Mike Pemberton",
      "Premier Sandy Silver"
    ],
    "answer": 2
  },
  {
    "question": "226. Which political party is in power in Yukon Territory?",
    "options": [
      "Progressive Conservatives",
      "New Democrats",
      "Yukon Liberal Party",
      "Yukon Party"
    ],
    "answer": 2
  }
];
