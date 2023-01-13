const videos = [
    {
        "title": "The bizarre world of parasitic wasps - Miles Zhang",
        "href": "https://www.youtube.com/watch?v=xqaX2yi0VF8"
    },
    {
        "title": "History vs. Thomas Jefferson - Frank Cogliano",
        "href": "https://www.youtube.com/watch?v=c517cpFALXE"
    },
    {
        "title": "The animal architecture visible from space - Glynnis Hood",
        "href": "https://www.youtube.com/watch?v=9_AuKM7S6TU"
    },
    {
        "title": "Why do you want to squeeze cute things? - Joshua Paul Dale",
        "href": "https://www.youtube.com/watch?v=yxsoE3jO8HM"
    },
    {
        "title": "3 ways to end a virus",
        "href": "https://www.youtube.com/watch?v=e2vfBo-pG8I"
    },
    {
        "title": "How puberty changes your brain - Shannon Odell",
        "href": "https://www.youtube.com/watch?v=deNGkzUlhZU"
    },
    {
        "title": "The best way to apologize (according to science)",
        "href": "https://www.youtube.com/watch?v=q-ApAdEOm5s"
    },
    {
        "title": "The city built by runaways - Marc Adam Hertzman & Flavio dos Santos Gomes",
        "href": "https://www.youtube.com/watch?v=5ckmXwx2n88"
    },
    {
        "title": "The science of falling in love - Shannon Odell",
        "href": "https://www.youtube.com/watch?v=f_OPjYQovAE"
    },
    {
        "title": "How will AI change the world?",
        "href": "https://www.youtube.com/watch?v=RzkD_rTEBYs"
    },
    {
        "title": "The Taj Mahal: A monument to eternal love - Stephanie Honchell Smith",
        "href": "https://www.youtube.com/watch?v=v580zy82rcE"
    },
    {
        "title": "How do we create a better economy?",
        "href": "https://www.youtube.com/watch?v=6MK6tuZ7Rws"
    },
    {
        "title": "Why plague doctors wore beaked masks",
        "href": "https://www.youtube.com/watch?v=LMt8xm4t7XQ"
    },
    {
        "title": "4 things all great listeners know",
        "href": "https://www.youtube.com/watch?v=i3ku5nx4tMU"
    },
    {
        "title": "The sibling rivalry that divided a town - Jay Van Bavel and Dominic Packer",
        "href": "https://www.youtube.com/watch?v=fNUQ8RnuUFk"
    },
    {
        "title": "How do oysters make pearls? - Rob Ulrich",
        "href": "https://www.youtube.com/watch?v=TGxKkBC6L2k"
    },
    {
        "title": "Will there be another pandemic in your lifetime?",
        "href": "https://www.youtube.com/watch?v=tMXjUWvJJto"
    },
    {
        "title": "Ethical dilemma: Whose life is more valuable? - Rebecca L. Walker",
        "href": "https://www.youtube.com/watch?v=3rQi2uNqwxk"
    },
    {
        "title": "Could one vaccine protect against everything?",
        "href": "https://www.youtube.com/watch?v=Z2Y0GMCFWq0"
    },
    {
        "title": "Is capitalism actually broken?",
        "href": "https://www.youtube.com/watch?v=wcR815SfWOU"
    },
    {
        "title": "Why you procrastinate even when it feels bad",
        "href": "https://www.youtube.com/watch?v=FWTNMzK9vG4"
    },
    {
        "title": "Is it dangerous to wake a sleepwalker? - Emmanuel During",
        "href": "https://www.youtube.com/watch?v=o_JLTmIFq_A"
    },
    {
        "title": "Why is it so hard to cure the common cold?",
        "href": "https://www.youtube.com/watch?v=LsqCA50d7BM&t=9s"
    },
    {
        "title": "What’s the smartest age? - Shannon Odell",
        "href": "https://www.youtube.com/watch?v=sbCvQbBi2G8"
    },
    {
        "title": "How did they build the Great Pyramid of Giza? - Soraya Field Fiorio",
        "href": "https://www.youtube.com/watch?v=fJBlEPOj4Fk&t=29s"
    },
    {
        "title": "Is inequality inevitable?",
        "href": "https://www.youtube.com/watch?v=rEnf_CFoyv0"
    },
    {
        "title": "What does the world's largest machine do? - Henry Richardson",
        "href": "https://www.youtube.com/watch?v=YomAHwuuQEI"
    },
    {
        "title": "Should you care what your parents think?",
        "href": "https://www.youtube.com/watch?v=ABYBtcM2D28"
    },
    {
        "title": "The myth of Pegasus and the chimera - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=BDprlH1sK_Y"
    },
    {
        "title": "Can you solve the alien pyramid riddle? - Henri Picciotto",
        "href": "https://www.youtube.com/watch?v=qsc3YZ2S924"
    },
    {
        "title": "Is it possible to lose weight fast? - Hei Man Chan",
        "href": "https://www.youtube.com/watch?v=P7yM0TKvUm4"
    },
    {
        "title": "These companies with no CEO are thriving",
        "href": "https://www.youtube.com/watch?v=4M6lrhuiPv0"
    },
    {
        "title": "How friendship affects your brain - Shannon Odell",
        "href": "https://www.youtube.com/watch?v=YmVpwXH4jhA"
    },
    {
        "title": "The myth of Zeus' test - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=ogE1nzLawJ0"
    },
    {
        "title": "The benefits of daydreaming - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=oiAQlDBJ88U"
    },
    {
        "title": "Plato's allegory of the ring - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=TfVmW6sNux8"
    },
    {
        "title": "What is a gig economy?",
        "href": "https://www.youtube.com/watch?v=OXT8xdqcAoU"
    },
    {
        "title": "Would you pass the wallet test?",
        "href": "https://www.youtube.com/watch?v=7Z8TyGKOLys"
    },
    {
        "title": "Coneheads, egg stacks and anteater attacks: The reign of a termite queen - Barbara L. Thorne",
        "href": "https://www.youtube.com/watch?v=JGnXq8l-rwo"
    },
    {
        "title": "The Boltzmann brain paradox - Fabio Pacucci",
        "href": "https://www.youtube.com/watch?v=OpohbXB_JZU"
    },
    {
        "title": "How to write like the best-selling author of all time - Jamie Bernthal",
        "href": "https://www.youtube.com/watch?v=98pNh3LtV8c"
    },
    {
        "title": "Why did Phillis Wheatley disappear? - Charita Gainey",
        "href": "https://www.youtube.com/watch?v=MgrwWuaRuso&t=196s"
    },
    {
        "title": "Can the economy grow forever?",
        "href": "https://www.youtube.com/watch?v=mT3P0YSNonE"
    },
    {
        "title": "The rise and fall of the medieval Islamic Empire - Petra Sijpesteijn & Birte Kristiansen",
        "href": "https://www.youtube.com/watch?v=rQ0EKiCt6H8"
    },
    {
        "title": "Can you guess what's wrong with these paintings? - Noah Charney",
        "href": "https://www.youtube.com/watch?v=T-fMSph7Iyo"
    },
    {
        "title": "A brief history of Spanish - Ilan Stavans",
        "href": "https://www.youtube.com/watch?v=qAXh9DHOm48"
    },
    {
        "title": "Why a sausage can do what your gloves cannot - Charles Wallace and Sajan Saini",
        "href": "https://www.youtube.com/watch?v=IdWXT391FJE&t=46s"
    },
    {
        "title": "This weird trick will help you summon an army of worms - Kenny Coogan",
        "href": "https://www.youtube.com/watch?v=RDA64eUoxag"
    },
    {
        "title": "The true cost of gold -  Lyla Latif",
        "href": "https://www.youtube.com/watch?v=1nglN3mfZUw"
    },
    {
        "title": "The 4 greatest threats to the survival of humanity",
        "href": "https://www.youtube.com/watch?v=WP6T4MH0Dn4"
    },
    {
        "title": "What causes yeast infections, and how do you get rid of them? - Liesbeth Demuyser",
        "href": "https://www.youtube.com/watch?v=Bgc1C1xI2dA"
    },
    {
        "title": "Hagfish: The world's slimiest creatures - Noah R. Bressman and Douglas Fudge",
        "href": "https://www.youtube.com/watch?v=aiDOtMXICXk"
    },
    {
        "title": "The smallest solution to one of our biggest problems - Tierney Thys & Christian Sardet",
        "href": "https://www.youtube.com/watch?v=-m0YaE8uKcg"
    },
    {
        "title": "How does alcohol cause hangovers? - Judy Grisel",
        "href": "https://www.youtube.com/watch?v=FZc-Y9gqjHI"
    },
    {
        "title": "What’s the best country to live in?",
        "href": "https://www.youtube.com/watch?v=EqJcNnijmdQ"
    },
    {
        "title": "What happens to your body at the top of Mount Everest - Andrew Lovering",
        "href": "https://www.youtube.com/watch?v=daV-tMnZeIw"
    },
    {
        "title": "Why can parrots talk? - Grace Smith-Vidaurre and Tim Wright",
        "href": "https://www.youtube.com/watch?v=1EYUhpimyxc"
    },
    {
        "title": "A brief history of dumplings - Miranda Brown",
        "href": "https://www.youtube.com/watch?v=iHqzHrEFFTU"
    },
    {
        "title": "Artemisia Gentileschi: The woman behind the paintings - Allison Leigh",
        "href": "https://www.youtube.com/watch?v=v7Xl6a4J7Wk"
    },
    {
        "title": "These animals are also plants … wait, what? - Luka Seamus Wright",
        "href": "https://www.youtube.com/watch?v=fSaHVHTqDY0"
    },
    {
        "title": "What is the rarest color in nature? - Victoria Hwang",
        "href": "https://www.youtube.com/watch?v=yRwoReHd7XU"
    },
    {
        "title": "Can you outsmart the college admissions fallacy? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=Id3TCbpWR2M"
    },
    {
        "title": "Ethical dilemma: Would you lie? - Sarah Stroud",
        "href": "https://www.youtube.com/watch?v=OI-G23HF6Sw"
    },
    {
        "title": "Can you solve the fortress riddle? - Henri Picciotto",
        "href": "https://www.youtube.com/watch?v=s5CLtBaRIwY"
    },
    {
        "title": "Ugly History: The Khmer Rouge murders - Timothy Williams",
        "href": "https://www.youtube.com/watch?v=8_TYFfkc_1U"
    },
    {
        "title": "How does heart transplant surgery work? - Roni Shanoada",
        "href": "https://www.youtube.com/watch?v=o1z2DfFZBS4"
    },
    {
        "title": "Why are eating disorders so hard to treat? - Anees Bahji",
        "href": "https://www.youtube.com/watch?v=3Bax8ijH038"
    },
    {
        "title": "The rebel radio that brought down a war criminal - Diana Sierra Becerra",
        "href": "https://www.youtube.com/watch?v=bObfR_uJ4oQ"
    },
    {
        "title": "Do tax cuts stimulate the economy? - Jonathan Smith",
        "href": "https://www.youtube.com/watch?v=wCLP3djiKvM"
    },
    {
        "title": "The biggest mistakes in mapmaking history - Kayla Wolf",
        "href": "https://www.youtube.com/watch?v=77hLX8jO6e4"
    },
    {
        "title": "The Irish myth of Diarmuid’s betrayal - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=fZNUcyAhOGI"
    },
    {
        "title": "How the Suez Canal changed the world - Lucia Carminati",
        "href": "https://www.youtube.com/watch?v=i9p-a8YJO-o"
    },
    {
        "title": "The myth of the original star-crossed lovers - Shannon Zhao",
        "href": "https://www.youtube.com/watch?v=s_TGkDcjBqI"
    },
    {
        "title": "Can you solve the private eye riddle? - Henri Picciotto",
        "href": "https://www.youtube.com/watch?v=a6pqpINjdRQ"
    },
    {
        "title": "The dark history of zombies - Christopher M. Moreman",
        "href": "https://www.youtube.com/watch?v=I7EOTLpDSzs"
    },
    {
        "title": "Why are cockroaches so hard to kill? - Ameya Gondhalekar",
        "href": "https://www.youtube.com/watch?v=lkdLg0Nq4SQ"
    },
    {
        "title": "The myth of Hades and Persephone - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=zLAYGZeVTPQ"
    },
    {
        "title": "Ethical dilemma: Who should you believe? - Alex Worsnip",
        "href": "https://www.youtube.com/watch?v=FB921D40ibw"
    },
    {
        "title": "Watch this if you're scared of snakes - Andrew Whitworth",
        "href": "https://www.youtube.com/watch?v=s_Cs1nbbv_M&t=76s"
    },
    {
        "title": "History vs. Tamerlane the Conqueror - Stephanie Honchell Smith",
        "href": "https://www.youtube.com/watch?v=0yL102ubTiw"
    },
    {
        "title": "Are the Northern Lights dangerous? - Fabio Pacucci",
        "href": "https://www.youtube.com/watch?v=8PCHd5banhE"
    },
    {
        "title": "A riddle of ice and fire dragons - Henri Picciotto",
        "href": "https://www.youtube.com/watch?v=jMA7pWIFmIg"
    },
    {
        "title": "The Chinese legend of the butterfly lovers - Lijun Zhang",
        "href": "https://www.youtube.com/watch?v=6MiOTB-Kpzw"
    },
    {
        "title": "How do you know you’re not dreaming? - Daniel Gregory",
        "href": "https://www.youtube.com/watch?v=pq9ECmry8bc"
    },
    {
        "title": "4 signs of emotional abuse - Viann Nguyen-Feng",
        "href": "https://www.youtube.com/watch?v=x2Q_kYyCH9Q"
    },
    {
        "title": "How pigeons took over the world - Elizabeth Carlen and Joanna Moles",
        "href": "https://www.youtube.com/watch?v=z3QPYXNPaaE"
    },
    {
        "title": "The movement that inspired the Holocaust - Alexandra Minna Stern and Natalie Lira",
        "href": "https://www.youtube.com/watch?v=6zCpRVP1DgQ"
    },
    {
        "title": "The myth of the moon goddess - Cynthia Fay Davis",
        "href": "https://www.youtube.com/watch?v=aQibQlpNIfw"
    },
    {
        "title": "The ingredient in almost everything you eat - Francesca Bot",
        "href": "https://www.youtube.com/watch?v=6uy0GCw397I"
    },
    {
        "title": "Why are US cities still so segregated? - Kevin Ehrman-Solberg and Kirsten Delegard",
        "href": "https://www.youtube.com/watch?v=4ngelr9h2jM"
    },
    {
        "title": "Can you solve the Big Bang riddle? - James Tanton",
        "href": "https://www.youtube.com/watch?v=SEDabz-hyKo"
    },
    {
        "title": "Building the impossible: Golden Gate Bridge - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=EPd2w5d_qAk"
    },
    {
        "title": "The dark history of the overthrow of Hawaii - Sydney Iaukea",
        "href": "https://www.youtube.com/watch?v=C2bjjwv4134"
    },
    {
        "title": "The myth of Narcissus and Echo - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=c5N8hRyHYB0"
    },
    {
        "title": "Why doesn't everyone have a jetpack? - Richard Browning",
        "href": "https://www.youtube.com/watch?v=lmP0l5udNCE"
    },
    {
        "title": "What is “normal” and what is “different”? - Yana Buhrer Tavanier",
        "href": "https://www.youtube.com/watch?v=Zz0Xcneakeg"
    },
    {
        "title": "The myth of Gawain and the Green Knight - Dan Kwartler",
        "href": "https://www.youtube.com/watch?v=SaQImmPev2o"
    },
    {
        "title": "Can you outsmart the fallacy that divided a nation? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=lmf6bWl-Hco"
    },
    {
        "title": "The myth of Anansi, the trickster spider - Emily Zobel Marshall",
        "href": "https://www.youtube.com/watch?v=6nWba9Ii5Lo"
    },
    {
        "title": "Which animal has the best eyesight? - Thomas W. Cronin",
        "href": "https://www.youtube.com/watch?v=QjVqIW281Qo"
    },
    {
        "title": "Can you solve the birthday cake riddle? - Marie Brodsky",
        "href": "https://www.youtube.com/watch?v=F5sZQ4Xutgk"
    },
    {
        "title": "The tragic myth of the Sun God's son - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=zAxfrI8zHU4"
    },
    {
        "title": "Why do cats have vertical pupils? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=jdrNjHPYKz4"
    },
    {
        "title": "Why is it so hard to escape poverty? - Ann-Helén Bay",
        "href": "https://www.youtube.com/watch?v=D9N7QaIOkG8"
    },
    {
        "title": "The myth of Loki’s monstrous children - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=cg_NLOQxFuo"
    },
    {
        "title": "Why is the Mona Lisa so famous? - Noah Charney",
        "href": "https://www.youtube.com/watch?v=yRK_uCMwZPY"
    },
    {
        "title": "Blood, concrete, and dynamite: Building the Hoover Dam - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=TlyIDlFNVOY"
    },
    {
        "title": "You can only save one— who do you choose? - Doug MacKay",
        "href": "https://www.youtube.com/watch?v=A1x7FqXRy9c"
    },
    {
        "title": "The dark history of Mount Rushmore - Ned Blackhawk and Jeffrey D. Means",
        "href": "https://www.youtube.com/watch?v=hX4IvoP1HTk"
    },
    {
        "title": "Would you raise the bird that murdered your children? - Steve Rothstein",
        "href": "https://www.youtube.com/watch?v=RAPPT7gcl5s"
    },
    {
        "title": "How one of the most profitable companies in history rose to power - Adam Clulow",
        "href": "https://www.youtube.com/watch?v=OxeTFB84e2k"
    },
    {
        "title": "Yes, scientists are actually building an elevator to space - Fabio Pacucci",
        "href": "https://www.youtube.com/watch?v=HQhmsDkZhQA"
    },
    {
        "title": "Can stereotypes ever be good? - Sheila Marie Orfano and Densho",
        "href": "https://www.youtube.com/watch?v=aFXmyNUaXFo"
    },
    {
        "title": "Why do your jeans wear out so quickly? - Madhavi Venkatesan",
        "href": "https://www.youtube.com/watch?v=qmGjkXIqI08"
    },
    {
        "title": "The wild sex lives of marine creatures - Luka Seamus Wright",
        "href": "https://www.youtube.com/watch?v=BJpPkOZKROc"
    },
    {
        "title": "Can you solve the human cannonball riddle? - Alex Rosenthal",
        "href": "https://www.youtube.com/watch?v=o4MpBV4F3qs"
    },
    {
        "title": "Nature's fortress: How cacti keep water in and predators out - Lucas C. Majure",
        "href": "https://www.youtube.com/watch?v=g9Szzb2YBXY"
    },
    {
        "title": "How to make a sad story funny - Jodie Houlston-Lau",
        "href": "https://www.youtube.com/watch?v=K6r2ikSjnUo"
    },
    {
        "title": "The twins who tricked the Maya gods of death - Ilan Stavans",
        "href": "https://www.youtube.com/watch?v=s-kDttqywJ4"
    },
    {
        "title": "Why do some people snore so loudly? - Alayna Vaughan",
        "href": "https://www.youtube.com/watch?v=m49d9FT9IgE"
    },
    {
        "title": "Just add water: The garden insect that can turn into a plague - Jeffrey A. Lockwood",
        "href": "https://www.youtube.com/watch?v=6iAfUomyCjo"
    },
    {
        "title": "How to get better at video games, according to babies - Brian Christian",
        "href": "https://www.youtube.com/watch?v=PP8Zc778B8s"
    },
    {
        "title": "The Norse myth that inspired “The Lord of the Rings” - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=ByCTeTI3SDg"
    },
    {
        "title": "The surprisingly long history of electric cars - Daniel Sperling and Gil Tal",
        "href": "https://www.youtube.com/watch?v=-EG6rqA2vvA"
    },
    {
        "title": "Why is this 2,500 year old shipwreck so well-preserved? - Helen Farr and Jon Adams",
        "href": "https://www.youtube.com/watch?v=mHMfzDq1F08"
    },
    {
        "title": "Can you solve the computer virus riddle? - James Tanton",
        "href": "https://www.youtube.com/watch?v=i0WH4SFpeB8"
    },
    {
        "title": "Why don’t we cover the desert with solar panels? - Dan Kwartler",
        "href": "https://www.youtube.com/watch?v=WcLlpWmEpQ8"
    },
    {
        "title": "Zora Neale Hurston's \"Their Eyes Were Watching God\" - Tanya Boucicaut",
        "href": "https://www.youtube.com/watch?v=SPWpUwUGNk0"
    },
    {
        "title": "Where will you be able to live in 20 years? - Carol Farbotko and Ingrid Boas",
        "href": "https://www.youtube.com/watch?v=M3XZBYVSnJ0"
    },
    {
        "title": "What happened to the lost Kingdom of Kush? - Geoff Emberling",
        "href": "https://www.youtube.com/watch?v=ylS_Uff2oMM"
    },
    {
        "title": "The genes you don't get from your parents (but can't live without) - Devin Shuman",
        "href": "https://www.youtube.com/watch?v=0obYR-nf45I"
    },
    {
        "title": "The surprising origins of the word “lesbian” - Diane J. Rayor",
        "href": "https://www.youtube.com/watch?v=EFcftfqpxK4"
    },
    {
        "title": "How a concubine became the ruler of Egypt - Abdallah Ewis",
        "href": "https://www.youtube.com/watch?v=hkxnfnWtI2c"
    },
    {
        "title": "Can you solve the rogue submarine riddle? - Alex Rosenthal",
        "href": "https://www.youtube.com/watch?v=iNgJCYPdmdQ"
    },
    {
        "title": "The secrets of the world’s most famous symphony - Hanako Sawada",
        "href": "https://www.youtube.com/watch?v=7n0tNSFJQ34"
    },
    {
        "title": "You could have a secret twin (but not the way you think) - Kayla Mandel Sheets",
        "href": "https://www.youtube.com/watch?v=TbcEXnNrvIA"
    },
    {
        "title": "Earth's mysterious red glow, explained - Zoe Pierrat",
        "href": "https://www.youtube.com/watch?v=3jpy8UZUEOw"
    },
    {
        "title": "What makes a language... a language? - Martin Hilpert",
        "href": "https://www.youtube.com/watch?v=_Z_FOtfKyfo"
    },
    {
        "title": "The rise and fall of the Lakota Empire - Pekka Hämäläinen",
        "href": "https://www.youtube.com/watch?v=C-fQo8zmiPQ"
    },
    {
        "title": "What is MSG, and is it actually bad for you? - Sarah E. Tracy",
        "href": "https://www.youtube.com/watch?v=EKgEj5asL3o"
    },
    {
        "title": "The infamous overpopulation bet: Simon vs. Ehrlich - Soraya Field Fiorio",
        "href": "https://www.youtube.com/watch?v=xw2mn40BVo0"
    },
    {
        "title": "Is this the most successful animal ever? - Nigel Hughes",
        "href": "https://www.youtube.com/watch?v=sOBshvAknpQ"
    },
    {
        "title": "How we can detect pretty much anything - Hélène Morlon and Anna Papadopoulou",
        "href": "https://www.youtube.com/watch?v=bdwU_ZPk1cY"
    },
    {
        "title": "Can you outsmart the slippery slope fallacy? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=Qt4f7QrfRRc"
    },
    {
        "title": "How the COVID-19 vaccines were created so quickly - Kaitlyn Sadtler and Elizabeth Wayne",
        "href": "https://www.youtube.com/watch?v=v-NEr3KCug8"
    },
    {
        "title": "The secret society of the Great Dismal Swamp - Dan Sayers",
        "href": "https://www.youtube.com/watch?v=_Gt9Mc9jnOE"
    },
    {
        "title": "Can you solve the giant spider riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=0l5ftgEQUjM"
    },
    {
        "title": "The method that can \"prove\" almost anything - James A. Smith",
        "href": "https://www.youtube.com/watch?v=i60wwZDA1CI"
    },
    {
        "title": "What causes seizures, and how can we treat them? - Christopher E. Gaw",
        "href": "https://www.youtube.com/watch?v=LcO9YU-Pdws"
    },
    {
        "title": "Iceland's secret power - Jean-Baptiste P. Koehl",
        "href": "https://www.youtube.com/watch?v=5Hb_ONJUA9I"
    },
    {
        "title": "A year in the life of one of Earth's weirdest animals - Gilad Bino",
        "href": "https://www.youtube.com/watch?v=j43wzuciAkk"
    },
    {
        "title": "The rise and fall of the Kingdom of Man - Andrew McDonald",
        "href": "https://www.youtube.com/watch?v=IFhns9MOUt8"
    },
    {
        "title": "The paradox at the heart of mathematics: Gödel's Incompleteness Theorem - Marcus du Sautoy",
        "href": "https://www.youtube.com/watch?v=I4pQbo5MQOs"
    },
    {
        "title": "Why can’t governments print an unlimited amount of money? - Jonathan Smith",
        "href": "https://www.youtube.com/watch?v=GFTKKyYSCKs"
    },
    {
        "title": "The most notorious scientific feud in history - Lukas Rieppel",
        "href": "https://www.youtube.com/watch?v=uOuwOc5l1AA"
    },
    {
        "title": "History's deadliest king - by Georges Nzongola-Ntalaja",
        "href": "https://www.youtube.com/watch?v=MU4vua2kNQY"
    },
    {
        "title": "Could we build a wooden skyscraper? - Stefan Al",
        "href": "https://www.youtube.com/watch?v=E_vPKqVg1eA"
    },
    {
        "title": "The dark history of the Chinese Exclusion Act - Robert Chang",
        "href": "https://www.youtube.com/watch?v=2K88pWCimZg"
    },
    {
        "title": "What you can do with an extra jaw - Darien Satterfield",
        "href": "https://www.youtube.com/watch?v=7UOt5KzKjV4"
    },
    {
        "title": "How one person saved over 2,000 children from the Nazis - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=LxZkdQfgot8"
    },
    {
        "title": "Can you cheat death by solving this riddle? - Shravan S K",
        "href": "https://www.youtube.com/watch?v=N3JL3z4e2Qs"
    },
    {
        "title": "Axolotls: The salamanders that snack on each other (but don't die) - Luis Zambrano",
        "href": "https://www.youtube.com/watch?v=uooR4293p_4"
    },
    {
        "title": "Why was India split into two countries? - Haimanti Roy",
        "href": "https://www.youtube.com/watch?v=DrcCTgwbsjc"
    },
    {
        "title": "What few people know about the program that \"saved\" America - Meg Jacobs",
        "href": "https://www.youtube.com/watch?v=VWvA26V4wk0"
    },
    {
        "title": "A brief history of toilets - Francis de los Reyes",
        "href": "https://www.youtube.com/watch?v=0dYk99S98Jc"
    },
    {
        "title": "The sharks that hunt in forests - Luka Seamus Wright",
        "href": "https://www.youtube.com/watch?v=2YuFNymq_M0"
    },
    {
        "title": "How do you know what's true? - Sheila Marie Orfano",
        "href": "https://www.youtube.com/watch?v=xg5y6Ao7VE4"
    },
    {
        "title": "Ugly History: The U.S. Syphilis Experiment - Susan M. Reverby",
        "href": "https://www.youtube.com/watch?v=ZV7RzS8QRXE"
    },
    {
        "title": "A day in the life of the oracle of Delphi - Mark Robinson",
        "href": "https://www.youtube.com/watch?v=Wvdy0UQNO9E"
    },
    {
        "title": "Why do we have hair in such random places? - Nina G. Jablonski",
        "href": "https://www.youtube.com/watch?v=wd18yfQqa8A"
    },
    {
        "title": "The epic of Gilgamesh, the king who tried to conquer death - Soraya Field Fiorio",
        "href": "https://www.youtube.com/watch?v=BV9t3Cp18Rc"
    },
    {
        "title": "Can you solve the Trojan War riddle? - Dennis E. Shasha",
        "href": "https://www.youtube.com/watch?v=MJ5CRZFSlAU"
    },
    {
        "title": "Could you survive the real Twilight Zone? - Philip Renaud and Kenneth Kostel",
        "href": "https://www.youtube.com/watch?v=-yJ3RySf9U4"
    },
    {
        "title": "The woman who stared at the sun - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=LxM9PhcY_90"
    },
    {
        "title": "Run, sail, or hide? How to survive the destruction of Pompeii - Gary Devore",
        "href": "https://www.youtube.com/watch?v=9klE-iUxX0c"
    },
    {
        "title": "Can you be awake and asleep at the same time? - Masako Tamaki",
        "href": "https://www.youtube.com/watch?v=9-Ds0gA7pMs"
    },
    {
        "title": "What happens to your brain during a migraine - Marianne Schwarz",
        "href": "https://www.youtube.com/watch?v=qwZypa0iKq8"
    },
    {
        "title": "Should you donate your DNA to help cure diseases? - Greg Foot",
        "href": "https://www.youtube.com/watch?v=j836dsMHAkY"
    },
    {
        "title": "What really happened during the Attica Prison Rebellion - Orisanmi Burton",
        "href": "https://www.youtube.com/watch?v=SEczpdxl6e4"
    },
    {
        "title": "What’s in the air you breathe? - Amy Hrdina and Jesse Kroll",
        "href": "https://www.youtube.com/watch?v=xEodej_M7TI"
    },
    {
        "title": "How one design flaw almost toppled a skyscraper - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=x0tcRqf7ciY"
    },
    {
        "title": "How to get a word added to the dictionary - Ilan Stavans",
        "href": "https://www.youtube.com/watch?v=PJJ_pRqvtCs"
    },
    {
        "title": "Meet the bluefin tuna, the toughest fish in the sea - Grantly Galland and Raiana McKinney",
        "href": "https://www.youtube.com/watch?v=WA_jIj_w12U"
    },
    {
        "title": "How long should your naps be? - Sara C. Mednick",
        "href": "https://www.youtube.com/watch?v=BN9yqF6Um98"
    },
    {
        "title": "Demolition, disease, and death: Building the Panama Canal - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=uE_UuHRtXCY"
    },
    {
        "title": "Can you solve Dongle's Difficult Dilemma? - Dennis E. Shasha",
        "href": "https://www.youtube.com/watch?v=8xXslshomOs"
    },
    {
        "title": "How do wind turbines work? - Rebecca J. Barthelmie and Sara C. Pryor",
        "href": "https://www.youtube.com/watch?v=xy9nj94xvKA"
    },
    {
        "title": "How the world’s tallest skyscraper was built - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=el1K-xILtwo"
    },
    {
        "title": "The world’s most painful insect sting - Justin Schmidt",
        "href": "https://www.youtube.com/watch?v=PUe80HnKE3E"
    },
    {
        "title": "Why are airplanes slower than they used to be? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=hd8tYiLSmn0"
    },
    {
        "title": "Whatever happened to acid rain? - Joseph Goffman",
        "href": "https://www.youtube.com/watch?v=WIdWjqZsGgg"
    },
    {
        "title": "This tool will help improve your critical thinking - Erick Wilberding",
        "href": "https://www.youtube.com/watch?v=vNDYUlxNIAA"
    },
    {
        "title": "The surprising secrets of hummingbird flight - Kristiina J. Hurme and Alejandro Rico-Guevara",
        "href": "https://www.youtube.com/watch?v=1Lt3nd4QKy4"
    },
    {
        "title": "Why good ideas get trapped in the valley of death— and how to rescue them",
        "href": "https://www.youtube.com/watch?v=-CBlVUPd25M"
    },
    {
        "title": "Can you outsmart the apples and oranges fallacy? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=XZ-qspBsbqA"
    },
    {
        "title": "How to see with sound - Jacques S. Abramowicz",
        "href": "https://www.youtube.com/watch?v=4JLNb8-LOB0"
    },
    {
        "title": "A brief history of the devil - Brian A. Pavlac",
        "href": "https://www.youtube.com/watch?v=5_To7wO0Exo"
    },
    {
        "title": "Why every world map is wrong - Kayla Wolf",
        "href": "https://www.youtube.com/watch?v=eTYsIePy5zg"
    },
    {
        "title": "Can you solve the fantasy election riddle? - Dennis E. Shasha",
        "href": "https://www.youtube.com/watch?v=-lLkBoYv5FU"
    },
    {
        "title": "Ugly History: The Spanish Inquisition - Kayla Wolf",
        "href": "https://www.youtube.com/watch?v=zmcKS47BsAo"
    },
    {
        "title": "What’s the best fuel for your car?",
        "href": "https://www.youtube.com/watch?v=UoH2-TlcDrU"
    },
    {
        "title": "How do antidepressants work? - Neil R. Jeyasingam",
        "href": "https://www.youtube.com/watch?v=ClPVJ25Ka4k"
    },
    {
        "title": "How much land does it take to power the world?",
        "href": "https://www.youtube.com/watch?v=DW0jTe80kmM"
    },
    {
        "title": "The best nose in the animal kingdom - Chase LaDue & Bruce A. Schulte",
        "href": "https://www.youtube.com/watch?v=mL2_zXCgbXI"
    },
    {
        "title": "How does artificial intelligence learn? - Briana Brownell",
        "href": "https://www.youtube.com/watch?v=0yCJMt9Mx9c"
    },
    {
        "title": "How much electricity does it take to power the world?",
        "href": "https://www.youtube.com/watch?v=tjwrG4Debc4"
    },
    {
        "title": "Who were Las Mariposas, and why were they murdered? - Lisa Krause",
        "href": "https://www.youtube.com/watch?v=1e7bhUjUEJ8"
    },
    {
        "title": "How would you finish the sentence, “Imagine if…”? - Sir Ken Robinson",
        "href": "https://www.youtube.com/watch?v=covHhQgr5kU"
    },
    {
        "title": "Can loud music damage your hearing? - Heather Malyuk",
        "href": "https://www.youtube.com/watch?v=-R307w05iJc"
    },
    {
        "title": "The material that could change the world... for a third time",
        "href": "https://www.youtube.com/watch?v=hRI0ymx_6aw"
    },
    {
        "title": "Debunking the myth of the Lost Cause: A lie embedded in American history - Karen L. Cox",
        "href": "https://www.youtube.com/watch?v=XP0_wnaW-a0"
    },
    {
        "title": "Can you solve the demon dance party riddle? - Edwin Meyer",
        "href": "https://www.youtube.com/watch?v=KT-d8MlT27A"
    },
    {
        "title": "The world's biggest battery looks nothing like a battery",
        "href": "https://www.youtube.com/watch?v=r4OWMSG4Agg"
    },
    {
        "title": "Why do we, like, hesitate when we, um, speak? - Lorenzo García-Amaya",
        "href": "https://www.youtube.com/watch?v=FsMWbVrjucg"
    },
    {
        "title": "The “myth” of the boiling frog",
        "href": "https://www.youtube.com/watch?v=128fp0rqfbE"
    },
    {
        "title": "The satisfying math of folding origami - Evan Zodl",
        "href": "https://www.youtube.com/watch?v=etCW9M9VdGk"
    },
    {
        "title": "What causes dandruff, and how do you get rid of it? - Thomas L. Dawson",
        "href": "https://www.youtube.com/watch?v=x6DUOokXZAo&t=2s"
    },
    {
        "title": "Uncovering the brain's biggest secret - Melanie E. Peffer",
        "href": "https://www.youtube.com/watch?v=iQqSKfPop28"
    },
    {
        "title": "Why didn’t this 2,000 year old body decompose? - Carolyn Marshall",
        "href": "https://www.youtube.com/watch?v=5FXnPL2EaEU"
    },
    {
        "title": "What if every satellite suddenly disappeared? - Moriba Jah",
        "href": "https://www.youtube.com/watch?v=jVzbs81bDy0"
    },
    {
        "title": "The world’s most dangerous fart - Nick Caruso and Dani Rabaiotti",
        "href": "https://www.youtube.com/watch?v=zfttRfTmtuE"
    },
    {
        "title": "When did humans start getting divorced? - Rod Phillips",
        "href": "https://www.youtube.com/watch?v=Zj089JLYdMA"
    },
    {
        "title": "Why bats don't get sick - Arinjay Banerjee",
        "href": "https://www.youtube.com/watch?v=XiBXhCr_Jpw"
    },
    {
        "title": "The Japanese myth of the trickster raccoon - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=dALZLB_W8Lc"
    },
    {
        "title": "The rise of the Ottoman Empire - Mostafa Minawi",
        "href": "https://www.youtube.com/watch?v=BnOS90_cwQA"
    },
    {
        "title": "Who decides how long a second is? - John Kitching",
        "href": "https://www.youtube.com/watch?v=OKms5a0nGO4"
    },
    {
        "title": "We can help you master public speaking - Chris Anderson",
        "href": "https://www.youtube.com/watch?v=kcoch-Mpgls"
    },
    {
        "title": "Savitri and Satyavan: The legend of the princess who outwitted Death - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=1vB0gFi8uow"
    },
    {
        "title": "These squids can fly... no, really - Robert Siddall",
        "href": "https://www.youtube.com/watch?v=iMq89roPycI"
    },
    {
        "title": "A day in the life of an ancient Babylonian business mogul - Soraya Field Fiorio",
        "href": "https://www.youtube.com/watch?v=ZsiHrK9DvvQ"
    },
    {
        "title": "Why should you read Toni Morrison’s “Beloved”? - Yen Pham",
        "href": "https://www.youtube.com/watch?v=Xu2euaQGzDQ"
    },
    {
        "title": "The life cycle of a cup of coffee - A.J. Jacobs",
        "href": "https://www.youtube.com/watch?v=M0VWroX0gZA"
    },
    {
        "title": "Do personality tests work? - Merve Emre",
        "href": "https://www.youtube.com/watch?v=lN7Fmt1i5TI"
    },
    {
        "title": "The strange history of the world's most stolen painting - Noah Charney",
        "href": "https://www.youtube.com/watch?v=6aKUQr4YTgE"
    },
    {
        "title": "The spear-wielding stork who revolutionized science - Lucy Cooke",
        "href": "https://www.youtube.com/watch?v=eAQ1Ee5kTMQ"
    },
    {
        "title": "What happens when you die? A poetic inquiry",
        "href": "https://www.youtube.com/watch?v=4eGFMw3U1ts"
    },
    {
        "title": "This thought experiment will help you understand quantum mechanics - Matteo Fadel",
        "href": "https://www.youtube.com/watch?v=QkZCPMVgR4g"
    },
    {
        "title": "Building the world's largest (and most controversial) power plant - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=dcZ0BXJYlUA"
    },
    {
        "title": "Can you solve the monster duel riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=rn1mjuVXNEI"
    },
    {
        "title": "The world’s largest organism - Alex Rosenthal",
        "href": "https://www.youtube.com/watch?v=zC8abuKnr90"
    },
    {
        "title": "The most colorful gemstones on Earth - Jeff Dekofsky",
        "href": "https://www.youtube.com/watch?v=9iAn6Jdb-ig"
    },
    {
        "title": "The myth of Loki and the deadly mistletoe - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=8Poklx9Ifz4"
    },
    {
        "title": "Why is pneumonia so dangerous? - Eve Gaus and Vanessa Ruiz",
        "href": "https://www.youtube.com/watch?v=K_r-kMJjh8Y"
    },
    {
        "title": "Which bag should you use? - Luka Seamus Wright and Imogen Ellen Napper",
        "href": "https://www.youtube.com/watch?v=3_fjEc4aQVk"
    },
    {
        "title": "Can you solve the Alice in Wonderland riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=Gh3BRfXwmsE"
    },
    {
        "title": "How fast is the speed of thought? - Seena Mathew",
        "href": "https://www.youtube.com/watch?v=g12bxfYVhMk"
    },
    {
        "title": "Why do you get a fever when you're sick? - Christian Moro",
        "href": "https://www.youtube.com/watch?v=jRvxnpfCDSo"
    },
    {
        "title": "How do investors choose stocks? - Richard Coffin",
        "href": "https://www.youtube.com/watch?v=CMQLdJa64Wk"
    },
    {
        "title": "How do steroids affect your muscles— and the rest of your body? - Anees Bahji",
        "href": "https://www.youtube.com/watch?v=itEXhxjOPjk"
    },
    {
        "title": "The other \"Golden Rule\" - David L. Hu",
        "href": "https://www.youtube.com/watch?v=EidLGwyYpBE"
    },
    {
        "title": "The dark history of bananas - John Soluri",
        "href": "https://www.youtube.com/watch?v=esvycD1O3cM"
    },
    {
        "title": "Can you outsmart a troll (by thinking like one)? - Claire Wardle",
        "href": "https://www.youtube.com/watch?v=Iu4OdhjnN4I"
    },
    {
        "title": "What if there were 1 trillion more trees? - Jean-François Bastin",
        "href": "https://www.youtube.com/watch?v=3hxE7Af98AI&t=99s"
    },
    {
        "title": "Can you outsmart the fallacy that started a witch hunt? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=L9rkQJ91VOE"
    },
    {
        "title": "The hidden treasures of Timbuktu - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=40ehHbdi95o"
    },
    {
        "title": "Which type of milk is best for you? - Jonathan J. O’Sullivan & Grace E. Cunningham",
        "href": "https://www.youtube.com/watch?v=s6TXDFp1EcM"
    },
    {
        "title": "Could we steal the power of a black hole? - Fabio Pacucci",
        "href": "https://www.youtube.com/watch?v=Q6ZEf6UZyco"
    },
    {
        "title": "The rise and fall of history’s first empire - Soraya Field Fiorio",
        "href": "https://www.youtube.com/watch?v=XBk9KywTIgk"
    },
    {
        "title": "Can you solve the riddle and escape Hades? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=tbkiYideS-4"
    },
    {
        "title": "Can we create the \"perfect\" farm? - Brent Loken",
        "href": "https://www.youtube.com/watch?v=xFqecEtdGZ0"
    },
    {
        "title": "What causes panic attacks, and how can you prevent them? - Cindy J. Aaronson",
        "href": "https://www.youtube.com/watch?v=IzFObkVRSV0"
    },
    {
        "title": "Who owns the \"wilderness\"? - Elyse Cox",
        "href": "https://www.youtube.com/watch?v=XJasV-itdoc"
    },
    {
        "title": "The myth of the stolen eyeballs - Nathan D. Horowitz",
        "href": "https://www.youtube.com/watch?v=GmtcxWswrB8"
    },
    {
        "title": "The surprising effects of pregnancy",
        "href": "https://www.youtube.com/watch?v=F_ssj7-8rYg"
    },
    {
        "title": "The problem with the U.S. bail system - Camilo Ramirez",
        "href": "https://www.youtube.com/watch?v=W5w75eGTnag"
    },
    {
        "title": "How to perform brain surgery without making a single cut - Hyunsoo Joshua No",
        "href": "https://www.youtube.com/watch?v=6d_dtVTs4CM"
    },
    {
        "title": "The World Machine | Think Like A Coder, Ep 10",
        "href": "https://www.youtube.com/watch?v=2_CNihv5PCs"
    },
    {
        "title": "Is human evolution speeding up or slowing down? - Laurence Hurst",
        "href": "https://www.youtube.com/watch?v=NTeOhj6dxsU"
    },
    {
        "title": "Is life meaningless? And other absurd questions -  Nina Medvinskaya",
        "href": "https://www.youtube.com/watch?v=vPtzpjC7TF4"
    },
    {
        "title": "\"Jabberwocky\": One of literature's best bits of nonsense",
        "href": "https://www.youtube.com/watch?v=GLQos7-Vq8M"
    },
    {
        "title": "A day in the life of an ancient Greek architect - Mark Robinson",
        "href": "https://www.youtube.com/watch?v=tuZcS2Flabw"
    },
    {
        "title": "The Japanese folktale of the selfish scholar - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=VixAX2IzaE4"
    },
    {
        "title": "A brief history of plastic",
        "href": "https://www.youtube.com/watch?v=9GMbRG9CZJw"
    },
    {
        "title": "Are all of your memories real? - Daniel L. Schacter",
        "href": "https://www.youtube.com/watch?v=D-2p86FvqF4"
    },
    {
        "title": "Why people fall for misinformation - Joseph Isaac",
        "href": "https://www.youtube.com/watch?v=hz6GULbowAk"
    },
    {
        "title": "Can you solve the sorting hat riddle? - Dan Katz and Alex Rosenthal",
        "href": "https://www.youtube.com/watch?v=auhrB0bSTEo"
    },
    {
        "title": "The fish that walk on land - Noah R. Bressman",
        "href": "https://www.youtube.com/watch?v=qWyLtYrTLYo"
    },
    {
        "title": "How to outsmart the Prisoner’s Dilemma - Lucas Husted",
        "href": "https://www.youtube.com/watch?v=emyi4z-O0ls"
    },
    {
        "title": "Is the weather actually becoming more extreme? - R. Saravanan",
        "href": "https://www.youtube.com/watch?v=NCPTbfQyMt8"
    },
    {
        "title": "Evolution’s great mystery - Michael Corballis",
        "href": "https://www.youtube.com/watch?v=lz0lQ58QMzQ"
    },
    {
        "title": "The rise of modern populism - Takis S. Pappas",
        "href": "https://www.youtube.com/watch?v=uMNwUh0X5eI"
    },
    {
        "title": "Can the ocean run out of oxygen? - Kate Slabosky",
        "href": "https://www.youtube.com/watch?v=ovl_XbgmCbw"
    },
    {
        "title": "What’s that ringing in your ears? - Marc Fagelson",
        "href": "https://www.youtube.com/watch?v=TnsCsR2wDdk"
    },
    {
        "title": "The last living members of an extinct species - Jan Stejskal",
        "href": "https://www.youtube.com/watch?v=hNNqht30TDo"
    },
    {
        "title": "Can you solve the cheating royal riddle? - Dan Katz",
        "href": "https://www.youtube.com/watch?v=hk9c7sJ08Bg"
    },
    {
        "title": "Can you outsmart the fallacy that fooled a generation of doctors? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=8HLtFv_KqoE"
    },
    {
        "title": "The myth of Ireland's two greatest warriors - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=lawx8YoLEIY"
    },
    {
        "title": "The big-beaked, rock-munching fish that protect coral reefs - Mike Gil",
        "href": "https://www.youtube.com/watch?v=rI9yUJl00Ik"
    },
    {
        "title": "Newton’s three-body problem explained - Fabio Pacucci",
        "href": "https://www.youtube.com/watch?v=D89ngRr4uZg"
    },
    {
        "title": "Can you solve the honeybee riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=rLL-y2WLE14"
    },
    {
        "title": "Ethical dilemma: The burger murders - George Siedel and Christine Ladwig",
        "href": "https://www.youtube.com/watch?v=W8O131s31Rg"
    },
    {
        "title": "No one can figure out how eels have sex - Lucy Cooke",
        "href": "https://www.youtube.com/watch?v=RFi6ISTjkR4"
    },
    {
        "title": "How do our brains process speech? - Gareth Gaskell",
        "href": "https://www.youtube.com/watch?v=nZP7pb_t4oA"
    },
    {
        "title": "The myth of Jason, Medea, and the Golden Fleece - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=M7cIc7IAN6U"
    },
    {
        "title": "The rise and fall of the Celtic warriors - Philip Freeman",
        "href": "https://www.youtube.com/watch?v=lmYQMJi30aw"
    },
    {
        "title": "The Egyptian myth of the death of Osiris - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=O5dXz1Tq_Yg"
    },
    {
        "title": "The race to decode a mysterious language - Susan Lupack",
        "href": "https://www.youtube.com/watch?v=iePEw_cHp8s"
    },
    {
        "title": "Volcanic eruption explained - Steven Anderson",
        "href": "https://www.youtube.com/watch?v=LQwZwKS9RPs"
    },
    {
        "title": "Prohibition: Banning alcohol was a bad idea... - Rod Phillips",
        "href": "https://www.youtube.com/watch?v=y4BDnlUQ3CA"
    },
    {
        "title": "The tale of the boy who tricked the Devil - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=4nZ9gNGZwO0"
    },
    {
        "title": "The greatest mathematician that never lived - Pratik Aghor",
        "href": "https://www.youtube.com/watch?v=0O_boW9YA7I"
    },
    {
        "title": "The last chief of the Comanches and the fall of an empire - Dustin Tahmahkera",
        "href": "https://www.youtube.com/watch?v=e0uyu9vdd2g"
    },
    {
        "title": "Can you solve the Ragnarok riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=VrqBX-Tck2A"
    },
    {
        "title": "What do all languages have in common? - Cameron Morin",
        "href": "https://www.youtube.com/watch?v=RQW3zC5QaY4"
    },
    {
        "title": "First person vs. Second person vs. Third person - Rebekah Bergman",
        "href": "https://www.youtube.com/watch?v=B5vEfuLS2Qc"
    },
    {
        "title": "The Factory | Think Like A Coder, Ep 9",
        "href": "https://www.youtube.com/watch?v=5y0pcLkD7-I"
    },
    {
        "title": "A day in the life of a teenage samurai - Constantine N. Vaporis",
        "href": "https://www.youtube.com/watch?v=wy0mU-SbOrw"
    },
    {
        "title": "What yoga does to your body and brain - Krishna Sudhir",
        "href": "https://www.youtube.com/watch?v=_8kV4FHSdNA"
    },
    {
        "title": "Can steroids save your life? - Anees Bahji",
        "href": "https://www.youtube.com/watch?v=sshUgVo8r3U"
    },
    {
        "title": "How fast can a vaccine be made? - Dan Kwartler",
        "href": "https://www.youtube.com/watch?v=74WQgNa3OsQ"
    },
    {
        "title": "Which voting system is the best? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=PaxVCsnox_4"
    },
    {
        "title": "What can DNA tests really tell us about our ancestry? - Prosanta Chakrabarty",
        "href": "https://www.youtube.com/watch?v=YiydsMxOdM8"
    },
    {
        "title": "How to see more and care less: The art of Georgia O'Keeffe - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=4KQeu_mTYTQ"
    },
    {
        "title": "“What happened when we all stopped” narrated by Jane Goodall",
        "href": "https://www.youtube.com/watch?v=gX0HOy8Pi54"
    },
    {
        "title": "A day in the life of a Peruvian shaman - Gabriel Prieto",
        "href": "https://www.youtube.com/watch?v=TFlIatziRB8"
    },
    {
        "title": "When is a pandemic over?",
        "href": "https://www.youtube.com/watch?v=Qi0edf_nJDo"
    },
    {
        "title": "Why the @#$% is there so much traffic? - Benjamin Seibold",
        "href": "https://www.youtube.com/watch?v=TNokBgtSUvQ"
    },
    {
        "title": "Why should you read “Moby Dick”? - Sascha Morrell",
        "href": "https://www.youtube.com/watch?v=mmoFxVqZ9z4"
    },
    {
        "title": "How do ventilators work? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=yDtKBXOEsoM"
    },
    {
        "title": "Can you solve the world’s most evil wizard riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=OmUjIHOPnOw"
    },
    {
        "title": "How do you know if you have a virus? - Cella Wright",
        "href": "https://www.youtube.com/watch?v=jEs9PzHc9ho"
    },
    {
        "title": "What is a coronavirus? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=D9tTi-CDjDU"
    },
    {
        "title": "A day in the life of an Aztec midwife - Kay Read",
        "href": "https://www.youtube.com/watch?v=JZj7acYZ19w"
    },
    {
        "title": "TED invites the class of 2020 to give a TED Talk",
        "href": "https://www.youtube.com/watch?v=HhZiI3PhXwg"
    },
    {
        "title": "What causes opioid addiction, and why is it so tough to combat? - Mike Davis",
        "href": "https://www.youtube.com/watch?v=V0CdS128-q4"
    },
    {
        "title": "Which is better: Soap or hand sanitizer? - Alex Rosenthal and Pall Thordarson",
        "href": "https://www.youtube.com/watch?v=x7KKkElpyKQ"
    },
    {
        "title": "What really happened during the Salem Witch Trials - Brian A. Pavlac",
        "href": "https://www.youtube.com/watch?v=NVd8kuufBhM"
    },
    {
        "title": "This sea creature breathes through its butt - Cella Wright",
        "href": "https://www.youtube.com/watch?v=tQxep9S4dIg"
    },
    {
        "title": "The electrifying speeches of Sojourner Truth - Daina Ramey Berry",
        "href": "https://www.youtube.com/watch?v=0sn8CUyvG2k"
    },
    {
        "title": "The dark history of IQ tests - Stefan C. Dombrowski",
        "href": "https://www.youtube.com/watch?v=W2bKaw2AJxs"
    },
    {
        "title": "What happens if you cut down all of a city's trees? - Stefan Al",
        "href": "https://www.youtube.com/watch?v=zarll9bx6FI"
    },
    {
        "title": "The wildly complex anatomy of a sneaker - Angel Chang",
        "href": "https://www.youtube.com/watch?v=A_YMOhpyErI"
    },
    {
        "title": "Introducing Earth School",
        "href": "https://www.youtube.com/watch?v=NogD8Z57gFA"
    },
    {
        "title": "What’s the point(e) of ballet? - Ming Luke",
        "href": "https://www.youtube.com/watch?v=BRdFt3brZNw"
    },
    {
        "title": "The Gauntlet | Think Like A Coder, Ep 8",
        "href": "https://www.youtube.com/watch?v=8dEdCea-UVU"
    },
    {
        "title": "The bug that poops candy - George Zaidan",
        "href": "https://www.youtube.com/watch?v=LVdynVuJsBo"
    },
    {
        "title": "The hidden life of Rosa Parks -  Riché D. Richardson",
        "href": "https://www.youtube.com/watch?v=tLfbmepDd4c"
    },
    {
        "title": "How does alcohol make you drunk? - Judy Grisel",
        "href": "https://www.youtube.com/watch?v=gCrmFbgT37I"
    },
    {
        "title": "How the Monkey King escaped the underworld - Shunan Teng",
        "href": "https://www.youtube.com/watch?v=Xs-9vfWDJfU"
    },
    {
        "title": "The art forger who tricked the Nazis - Noah Charney",
        "href": "https://www.youtube.com/watch?v=Y5JdbuBe6SY"
    },
    {
        "title": "Can you solve the sea monster riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=YytHuow4VnU"
    },
    {
        "title": "History vs. Sigmund Freud - Todd Dufresne",
        "href": "https://www.youtube.com/watch?v=mKG-PEVYOR8"
    },
    {
        "title": "How the world's longest underwater tunnel was built - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=qNS2jj2w-GI"
    },
    {
        "title": "What is schizophrenia? - Anees Bahji",
        "href": "https://www.youtube.com/watch?v=K2sc_ck5BZU&t=18s"
    },
    {
        "title": "Why isn’t the Netherlands underwater? - Stefan Al",
        "href": "https://www.youtube.com/watch?v=25LW_PG2ZuI"
    },
    {
        "title": "Who was the world's first author? - Soraya Field Fiorio",
        "href": "https://www.youtube.com/watch?v=XhNw1BhV6sw"
    },
    {
        "title": "The imaginary king who changed the real world - Matteo Salvadore",
        "href": "https://www.youtube.com/watch?v=aJKqtoAcutA"
    },
    {
        "title": "How one scientist took on the chemical industry - Mark Lytle",
        "href": "https://www.youtube.com/watch?v=ezVEzCmiXM4"
    },
    {
        "title": "How can we solve the antibiotic resistance crisis? - Gerry Wright",
        "href": "https://www.youtube.com/watch?v=ZvhFeGEDFC8"
    },
    {
        "title": "The tale of the doctor who defied Death - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=yJ9UtAmjs7Y"
    },
    {
        "title": "The meaning of life according to Simone de Beauvoir - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=Ws2Y2cWme8c"
    },
    {
        "title": "What’s a squillo, and why do opera singers need it? - Ming Luke",
        "href": "https://www.youtube.com/watch?v=PKengo7y28U"
    },
    {
        "title": "NASA’s first software engineer: Margaret Hamilton - Matt Porter & Margaret Hamilton",
        "href": "https://www.youtube.com/watch?v=kYCZPXSVvOQ"
    },
    {
        "title": "Can you solve the death race riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=Lvr5JqLVe34"
    },
    {
        "title": "The Egyptian myth of Isis and the seven scorpions - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=JycXLG6GeYk"
    },
    {
        "title": "The Tower of Epiphany | Think Like A Coder, Ep 7",
        "href": "https://www.youtube.com/watch?v=Xq-szohkAqU"
    },
    {
        "title": "How good are you at calculating risk? - Gerd Gigerenzer",
        "href": "https://www.youtube.com/watch?v=p7EsMIxcN5s"
    },
    {
        "title": "Vultures: The acid-puking, plague-busting heroes of the ecosystem - Kenny Coogan",
        "href": "https://www.youtube.com/watch?v=1WIUuGCIfcc"
    },
    {
        "title": "The secret messages of Viking runestones - Jesse Byock",
        "href": "https://www.youtube.com/watch?v=wOcVy5dvwjs"
    },
    {
        "title": "How do blood transfusions work? - Bill Schutt",
        "href": "https://www.youtube.com/watch?v=qcZKbjYyOfE"
    },
    {
        "title": "The legend of Annapurna, Hindu goddess of nourishment - Antara Raychaudhuri & Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=ztoUaJFEi8M"
    },
    {
        "title": "One of the most epic engineering feats in history - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=dyckL6HuLRU"
    },
    {
        "title": "The accident that changed the world - Allison Ramsey and Mary Staicu",
        "href": "https://www.youtube.com/watch?v=CNbnLgetqHs"
    },
    {
        "title": "Everything changed when the fire crystal got stolen - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=OGHB8zUtfp4"
    },
    {
        "title": "Do politics make us irrational? - Jay Van Bavel",
        "href": "https://www.youtube.com/watch?v=8yOoOL9PC-o"
    },
    {
        "title": "The life, legacy & assassination of an African revolutionary - Lisa Janae Bacon",
        "href": "https://www.youtube.com/watch?v=H_iF-E5UEOg"
    },
    {
        "title": "The Chasm | Think Like A Coder, Ep 6",
        "href": "https://www.youtube.com/watch?v=bbM-zSkjvHo"
    },
    {
        "title": "Licking bees and pulping trees: The reign of a wasp queen - Kenny Coogan",
        "href": "https://www.youtube.com/watch?v=q93IfqUbEf4"
    },
    {
        "title": "How bones make blood - Melody Smith",
        "href": "https://www.youtube.com/watch?v=1Qfmkd6C8u8"
    },
    {
        "title": "Why is cotton in everything? - Michael R. Stiff",
        "href": "https://www.youtube.com/watch?v=tKLJ6KQAcjI"
    },
    {
        "title": "What's so special about Viking ships? - Jan Bill",
        "href": "https://www.youtube.com/watch?v=kge0c2mNmRQ"
    },
    {
        "title": "Mating frenzies, sperm hoards, and brood raids: The life of a fire ant queen - Walter R. Tschinkel",
        "href": "https://www.youtube.com/watch?v=RNdouBNrnM0"
    },
    {
        "title": "The ballet that incited a riot - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=8FXA_8LR2IM"
    },
    {
        "title": "The Artists | Think Like A Coder, Ep 5",
        "href": "https://www.youtube.com/watch?v=7mOev8v3D1U"
    },
    {
        "title": "Can you solve the dragon jousting riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=KSkw7hKN_Xg"
    },
    {
        "title": "The mysterious life and death of Rasputin - Eden Girma",
        "href": "https://www.youtube.com/watch?v=4dEf1ep3O9I"
    },
    {
        "title": "Could a breathalyzer detect cancer? - Julian Burschka",
        "href": "https://www.youtube.com/watch?v=ZNFscrBEhR0"
    },
    {
        "title": "Master the art of public speaking with TED Masterclass",
        "href": "https://www.youtube.com/watch?v=b7id4rzgKIM"
    },
    {
        "title": "A brief history of alcohol - Rod Phillips",
        "href": "https://www.youtube.com/watch?v=y5XEwTDlriE"
    },
    {
        "title": "The philosophy of cynicism - William D. Desmond",
        "href": "https://www.youtube.com/watch?v=Utzym1I_BiY"
    },
    {
        "title": "Why should you read “Dune” by Frank Herbert? - Dan Kwartler",
        "href": "https://www.youtube.com/watch?v=yhYU4ZbLmmk"
    },
    {
        "title": "Why should you read “The Joy Luck Club” by Amy Tan? - Sheila Marie Orfano",
        "href": "https://www.youtube.com/watch?v=DFgpr5LlDVA"
    },
    {
        "title": "Why should you read “Lord of the Flies” by William Golding? - Jill Dash",
        "href": "https://www.youtube.com/watch?v=NnnZ6y1HPqI"
    },
    {
        "title": "Hacking bacteria to fight cancer - Tal Danino",
        "href": "https://www.youtube.com/watch?v=_3guktHJNPM"
    },
    {
        "title": "The Train Heist | Think Like A Coder, Ep 4",
        "href": "https://www.youtube.com/watch?v=_kR93WRw31Y"
    },
    {
        "title": "How does chemotherapy work? - Hyunsoo Joshua No",
        "href": "https://www.youtube.com/watch?v=RgWQCGX3MOk"
    },
    {
        "title": "Why doesn’t the Leaning Tower of Pisa fall over? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=HFqf6aKdOC0"
    },
    {
        "title": "Is marijuana bad for your brain? - Anees Bahji",
        "href": "https://www.youtube.com/watch?v=Nlcr1jd_Tok"
    },
    {
        "title": "The history of the world according to corn - Chris A. Kniesly",
        "href": "https://www.youtube.com/watch?v=i6teBcfKpik"
    },
    {
        "title": "Can you outsmart this logical fallacy? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=Ghbkv0MKV-w"
    },
    {
        "title": "History's \"worst\" nun - Theresa A. Yugar",
        "href": "https://www.youtube.com/watch?v=9wSOt3z_-YY"
    },
    {
        "title": "How does laser eye surgery work? - Dan Reinstein",
        "href": "https://www.youtube.com/watch?v=XPDVmBg5DeE"
    },
    {
        "title": "The Furnace Bots | Think Like A Coder, Ep 3",
        "href": "https://www.youtube.com/watch?v=wQPArC8NN5o"
    },
    {
        "title": "The myth of Loki and the master builder - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=MTz2f9yjmK8"
    },
    {
        "title": "The dangers of mixing drugs - Céline Valéry",
        "href": "https://www.youtube.com/watch?v=aDsW8tx1KsY"
    },
    {
        "title": "Why do humans have a third eyelid? - Dorsa Amir",
        "href": "https://www.youtube.com/watch?v=d37SBsPB7sk"
    },
    {
        "title": "Why haven’t we cured arthritis? - Kaitlyn Sadtler and Heather J. Faust",
        "href": "https://www.youtube.com/watch?v=FWsBm3hr3B0"
    },
    {
        "title": "Game theory challenge: Can you predict human behavior? - Lucas Husted",
        "href": "https://www.youtube.com/watch?v=MknV3t5QbUc"
    },
    {
        "title": "The Taino myth of the cursed creator - Bill Keegan",
        "href": "https://www.youtube.com/watch?v=arlTwhiMxVM"
    },
    {
        "title": "Are the illuminati real? - Chip Berlet",
        "href": "https://www.youtube.com/watch?v=d-50h9nDugk"
    },
    {
        "title": "Claws vs. nails - Matthew Borths",
        "href": "https://www.youtube.com/watch?v=7w2gCBL1MCg"
    },
    {
        "title": "How close are we to uploading our minds? - Michael S.A. Graziano",
        "href": "https://www.youtube.com/watch?v=2DWnvx1NYUA"
    },
    {
        "title": "Let’s plant 20 million trees together! #TeamTrees",
        "href": "https://www.youtube.com/watch?v=TRIBbTo5Svc"
    },
    {
        "title": "The Greek myth of Talos, the first robot - Adrienne Mayor",
        "href": "https://www.youtube.com/watch?v=vVTA-E3G8bQ"
    },
    {
        "title": "Hawking's black hole paradox explained - Fabio Pacucci",
        "href": "https://www.youtube.com/watch?v=r5Pcqkhmp_0"
    },
    {
        "title": "The Maya myth of the morning star",
        "href": "https://www.youtube.com/watch?v=Z2vzrQWny_c"
    },
    {
        "title": "How to 3D print human tissue - Taneka Jones",
        "href": "https://www.youtube.com/watch?v=uHbn7wLN_3k"
    },
    {
        "title": "What causes an economic recession? - Richard Coffin",
        "href": "https://www.youtube.com/watch?v=SwaCg7Gwtzw"
    },
    {
        "title": "The Resistance | Think Like A Coder, Ep 2",
        "href": "https://www.youtube.com/watch?v=axBuiB55CfA"
    },
    {
        "title": "Why should you read Dante’s “Divine Comedy”? - Sheila Marie Orfano",
        "href": "https://www.youtube.com/watch?v=YbCEWSip9pQ"
    },
    {
        "title": "Are we living in a simulation? - Zohreh Davoudi",
        "href": "https://www.youtube.com/watch?v=yGfTDcHJHSI"
    },
    {
        "title": "The first and last king of Haiti - Marlene Daut",
        "href": "https://www.youtube.com/watch?v=q7lfSjjMNU8"
    },
    {
        "title": "\"For Estefani\" poem by Aracelis Girmay",
        "href": "https://www.youtube.com/watch?v=DcIYMCC0M1w"
    },
    {
        "title": "Ugly History: Japanese American incarceration camps - Densho",
        "href": "https://www.youtube.com/watch?v=hI4NoVWq87M"
    },
    {
        "title": "The Prison Break | Think Like A Coder, Ep 1",
        "href": "https://www.youtube.com/watch?v=KFVdHDMcepw"
    },
    {
        "title": "Einstein's twin paradox explained - Amber Stuver",
        "href": "https://www.youtube.com/watch?v=h8GqaAp3cGs"
    },
    {
        "title": "Why should you read “The God of Small Things” by Arundhati Roy? - Laura Wright",
        "href": "https://www.youtube.com/watch?v=QjcCmERmIMo"
    },
    {
        "title": "The myth of the Sampo— an infinite source of fortune and greed - Hanna-Ilona Härmävaara",
        "href": "https://www.youtube.com/watch?v=71fLFOjruFc"
    },
    {
        "title": "Think Like a Coder | Teaser Trailer",
        "href": "https://www.youtube.com/watch?v=qhAAmyGnA-M"
    },
    {
        "title": "What makes neon signs glow? A 360° animation - Michael Lipman",
        "href": "https://www.youtube.com/watch?v=6ev4KHAToWM"
    },
    {
        "title": "A day in the life of a Celtic Druid - Philip Freeman",
        "href": "https://www.youtube.com/watch?v=6kmxzIY7mE8"
    },
    {
        "title": "Can you solve the secret sauce riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=HyRjuPP9S3o"
    },
    {
        "title": "A brief history of chess - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=YeB-1F-UKO0"
    },
    {
        "title": "Why should you read “Midnight’s Children”? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=x5pPo5KehCk"
    },
    {
        "title": "\"Ode to the Only Black Kid in the Class\" poem by Clint Smith",
        "href": "https://www.youtube.com/watch?v=OGoehR_k0Xk"
    },
    {
        "title": "The dust bunnies that built our planet - Lorin Swint Matthews",
        "href": "https://www.youtube.com/watch?v=G6qREv4eTRM"
    },
    {
        "title": "The secret student resistance to Hitler - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=ZtOKRsF6Rr0"
    },
    {
        "title": "The rise and fall of the Mongol Empire - Anne F. Broadbridge",
        "href": "https://www.youtube.com/watch?v=wUVvTqvjUaM"
    },
    {
        "title": "The myth of Jason and the Argonauts - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=peFwikd2-bw"
    },
    {
        "title": "The mysterious origins of life on Earth - Luka Seamus Wright",
        "href": "https://www.youtube.com/watch?v=de1hiS_XjWg"
    },
    {
        "title": "A day in the life of a Cossack warrior - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=33cP54FcERA"
    },
    {
        "title": "Why should you read “Kafka on the Shore”? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=mB4FO1itCi0"
    },
    {
        "title": "Can you solve the multiverse rescue mission riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=ZmaeljnPOu4"
    },
    {
        "title": "The high-stakes race to make quantum computers work - Chiara Decaroli",
        "href": "https://www.youtube.com/watch?v=r_t96FqWE4M"
    },
    {
        "title": "How do viruses jump from animals to humans? - Ben Longdon",
        "href": "https://www.youtube.com/watch?v=xjcsrU-ZmgY"
    },
    {
        "title": "From pacifist to spy: WWII’s surprising secret agent - Shrabani Basu",
        "href": "https://www.youtube.com/watch?v=Y7zyB7rsvHU"
    },
    {
        "title": "The murder of ancient Alexandria's greatest scholar - Soraya Field Fiorio",
        "href": "https://www.youtube.com/watch?v=n1mwZrVJ-TI"
    },
    {
        "title": "How turtle shells evolved... twice - Judy Cebra Thomas",
        "href": "https://www.youtube.com/watch?v=W9wAfqBd_T0"
    },
    {
        "title": "A brief history of cannibalism - Bill Schutt",
        "href": "https://www.youtube.com/watch?v=Y2ODPFiksBE"
    },
    {
        "title": "Romance and revolution: The poetry of Pablo Neruda - Ilan Stavans",
        "href": "https://www.youtube.com/watch?v=sogJXiaBM8Q"
    },
    {
        "title": "Ancient Rome’s most notorious doctor - Ramon Glazov",
        "href": "https://www.youtube.com/watch?v=r1BhsWsmjco"
    },
    {
        "title": "Can you solve the dark matter fuel riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=Fj2hTS5Kjyw"
    },
    {
        "title": "Infinity according to Jorge Luis Borges - Ilan Stavans",
        "href": "https://www.youtube.com/watch?v=mJeLGd3JV2I"
    },
    {
        "title": "The most common STI in the world - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=KOz-bNhEHhQ"
    },
    {
        "title": "\"New Colossus\" by Emma Lazarus",
        "href": "https://www.youtube.com/watch?v=NaKUuk78L1A"
    },
    {
        "title": "The secret language of trees - Camille Defrenne and Suzanne Simard",
        "href": "https://www.youtube.com/watch?v=V4m9SefyRjg"
    },
    {
        "title": "What makes tuberculosis (TB) the world's most infectious killer? - Melvin Sanicas",
        "href": "https://www.youtube.com/watch?v=N0Gv96uDctM"
    },
    {
        "title": "Why should you read \"Hamlet\"? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=QTu39aMg_mU"
    },
    {
        "title": "The Romans flooded the Colosseum for sea battles - Janelle Peters",
        "href": "https://www.youtube.com/watch?v=TB5weRIYhjQ"
    },
    {
        "title": "There may be extraterrestrial life in our solar system - Augusto Carballido",
        "href": "https://www.youtube.com/watch?v=odP3akRWJlY"
    },
    {
        "title": "How do crystals work? - Graham Baird",
        "href": "https://www.youtube.com/watch?v=PgSRAsgrKmg"
    },
    {
        "title": "Your body vs. implants - Kaitlyn Sadtler",
        "href": "https://www.youtube.com/watch?v=4h9nfYbov38"
    },
    {
        "title": "Underwater farms vs. climate change - Ayana Elizabeth Johnson and Megan Davis",
        "href": "https://www.youtube.com/watch?v=JYZpxRy5Mfg"
    },
    {
        "title": "Ugly History: Witch Hunts - Brian A. Pavlac",
        "href": "https://www.youtube.com/watch?v=7x5KesH3dzM"
    },
    {
        "title": "How close are we to eradicating HIV? - Philip A. Chan",
        "href": "https://www.youtube.com/watch?v=5_78Fyk7mlE"
    },
    {
        "title": "This one weird trick will help you spot clickbait - Jeff Leek & Lucy McGowan",
        "href": "https://www.youtube.com/watch?v=8IzfzoZsa-Q"
    },
    {
        "title": "You are more transparent than you think - Sajan Saini",
        "href": "https://www.youtube.com/watch?v=j7heZpuvu4U"
    },
    {
        "title": "The Opposites Game",
        "href": "https://www.youtube.com/watch?v=KO6527S5JOU"
    },
    {
        "title": "Why should you read “The Master and Margarita”? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=miNBicrLiXo"
    },
    {
        "title": "The lovable (and lethal) sea lion - Claire Simeone",
        "href": "https://www.youtube.com/watch?v=FrlDEJEALZo"
    },
    {
        "title": "The Chinese myth of the meddling monk - Shunan Teng",
        "href": "https://www.youtube.com/watch?v=mO6eMTKalRE"
    },
    {
        "title": "Can you spot the problem with these headlines? (Level 1) - Jeff Leek & Lucy McGowan",
        "href": "https://www.youtube.com/watch?v=w1CeRpfByG8"
    },
    {
        "title": "The mysterious science of pain - Joshua W. Pate",
        "href": "https://www.youtube.com/watch?v=eakyDiXX6Uc"
    },
    {
        "title": "Can a black hole be destroyed? - Fabio Pacucci",
        "href": "https://www.youtube.com/watch?v=AXR-etStvCI"
    },
    {
        "title": "Why should you read “Crime and Punishment”? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=Vtkv3-endYc"
    },
    {
        "title": "How do self-driving cars “see”? - Sajan Saini",
        "href": "https://www.youtube.com/watch?v=PRg5RNU_JLk"
    },
    {
        "title": "The Aztec myth of the unlikeliest sun god - Kay Almere Read",
        "href": "https://www.youtube.com/watch?v=fMPG-2vXi-s"
    },
    {
        "title": "The Chinese myth of the immortal white snake - Shunan Teng",
        "href": "https://www.youtube.com/watch?v=eEeeClBoqK0"
    },
    {
        "title": "How this disease changes the shape of your cells - Amber M. Yates",
        "href": "https://www.youtube.com/watch?v=hRnrIpUMyZQ"
    },
    {
        "title": "\"Accents\" by Denice Frohman",
        "href": "https://www.youtube.com/watch?v=84ZcT1jDCjk"
    },
    {
        "title": "Why is this painting so shocking? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=DJnH5CPCImY"
    },
    {
        "title": "How does the stock market work? - Oliver Elfenbaum",
        "href": "https://www.youtube.com/watch?v=p7HKvqRI_Bo"
    },
    {
        "title": "Can you solve the cuddly duddly fuddly wuddly riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=z-ZEfxAL9SI"
    },
    {
        "title": "Titan of terror: the dark imagination of H.P. Lovecraft - Silvia Moreno-García",
        "href": "https://www.youtube.com/watch?v=3M3L4VIZv-U"
    },
    {
        "title": "The hidden network that makes the internet possible - Sajan Saini",
        "href": "https://www.youtube.com/watch?v=er3v4PVNQqE"
    },
    {
        "title": "The surprising reason our muscles get tired - Christian Moro",
        "href": "https://www.youtube.com/watch?v=rLsimrBoYXc"
    },
    {
        "title": "What is a butt tuba and why is it in medieval art? - Michelle Brown",
        "href": "https://www.youtube.com/watch?v=LgBj48s1SA8"
    },
    {
        "title": "Turbulence: One of the great unsolved mysteries of physics - Tomás Chor",
        "href": "https://www.youtube.com/watch?v=S3i6tJ4XNqA"
    },
    {
        "title": "The wild world of carnivorous plants - Kenny Coogan",
        "href": "https://www.youtube.com/watch?v=ee7muQ_qKU0"
    },
    {
        "title": "How to biohack your cells to fight cancer - Greg Foot",
        "href": "https://www.youtube.com/watch?v=Mt5C5fhuU_0"
    },
    {
        "title": "Why are earthquakes so hard to predict? - Jean-Baptiste P. Koehl",
        "href": "https://www.youtube.com/watch?v=jhRuUoTnA6g"
    },
    {
        "title": "How to grow a glacier - M Jackson",
        "href": "https://www.youtube.com/watch?v=wlppif9IJzI"
    },
    {
        "title": "How to spot a pyramid scheme - Stacie Bosley",
        "href": "https://www.youtube.com/watch?v=SBGfHk91Vrk"
    },
    {
        "title": "\"First Kiss\" by Tim Seibles",
        "href": "https://www.youtube.com/watch?v=dv9sgFHS2Do"
    },
    {
        "title": "Frida Kahlo: The woman behind the legend - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=B9XYtPqWLB4"
    },
    {
        "title": "A brief history of dogs - David Ian Howe",
        "href": "https://www.youtube.com/watch?v=8_KWmzLObQ4"
    },
    {
        "title": "What “Machiavellian” really means - Pazit Cahlon and Alex Gendler",
        "href": "https://www.youtube.com/watch?v=fUlGtrHCGzs"
    },
    {
        "title": "The wicked wit of Jane Austen - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=NSL55lOwznU"
    },
    {
        "title": "Using radioactive drugs to see inside your body - Pedro Brugarolas",
        "href": "https://www.youtube.com/watch?v=KXzONBPcPIk"
    },
    {
        "title": "Can you solve the unstoppable blob riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=4peuImhJj44"
    },
    {
        "title": "How tall can a tree grow? - Valentin Hammoudi",
        "href": "https://www.youtube.com/watch?v=vvtPJKWUb2g"
    },
    {
        "title": "Harvey Milk's radical vision of equality - Lillian Faderman",
        "href": "https://www.youtube.com/watch?v=wr3kUfW2fM0"
    },
    {
        "title": "The physics of surfing - Nick Pizzo",
        "href": "https://www.youtube.com/watch?v=5nCcE-jABSo"
    },
    {
        "title": "Why should you read Sylvia Plath? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=wCWl8ZIgCHk"
    },
    {
        "title": "How does the Rorschach inkblot test work? - Damion Searls",
        "href": "https://www.youtube.com/watch?v=LYi19-Vx6go"
    },
    {
        "title": "The historic women’s suffrage march on Washington - Michelle Mehrtens",
        "href": "https://www.youtube.com/watch?v=_KhYRqozTDE"
    },
    {
        "title": "The chaotic brilliance of artist Jean-Michel Basquiat - Jordana Moore Saggese",
        "href": "https://www.youtube.com/watch?v=JX02QQXfb_o"
    },
    {
        "title": "Can you solve the jail break riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=9uZ-jeZS8d0"
    },
    {
        "title": "Why should you read sci-fi superstar Octavia E. Butler? - Ayana Jamieson and Moya Bailey",
        "href": "https://www.youtube.com/watch?v=X6YI8lsjJJA"
    },
    {
        "title": "An unsung hero of the civil rights movement - Christina Greer",
        "href": "https://www.youtube.com/watch?v=NJcUnXTaCgU"
    },
    {
        "title": "Three ways the universe could end - Venus Keus",
        "href": "https://www.youtube.com/watch?v=itpLU7OzNV8"
    },
    {
        "title": "The sexual deception of orchids - Anne Gaskett",
        "href": "https://www.youtube.com/watch?v=hmI-rJuYAjw"
    },
    {
        "title": "Notes of a native son: The world according to James Baldwin - Christina Greer",
        "href": "https://www.youtube.com/watch?v=dKku0AfTs0c"
    },
    {
        "title": "What is consciousness? - Michael S. A. Graziano",
        "href": "https://www.youtube.com/watch?v=MASBIB7zPo4"
    },
    {
        "title": "Will there ever be a mile-high skyscraper? - Stefan Al",
        "href": "https://www.youtube.com/watch?v=kF54-camgCg"
    },
    {
        "title": "Why should you read Shakespeare’s “The Tempest”? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=UvznOeSyESU"
    },
    {
        "title": "How one journalist risked her life to hold murderers accountable - Christina Greer",
        "href": "https://www.youtube.com/watch?v=fygjGXnaV9w"
    },
    {
        "title": "\"The Nutritionist\" by Andrea Gibson",
        "href": "https://www.youtube.com/watch?v=8kIffc8Phfs"
    },
    {
        "title": "\"The Second Coming\" by William Butler Yeats",
        "href": "https://www.youtube.com/watch?v=IY2oIsA4c7k"
    },
    {
        "title": "\"All the World's a Stage\" by William Shakespeare",
        "href": "https://www.youtube.com/watch?v=_jaSFtcDEiE"
    },
    {
        "title": "\"Three Months After\" by Cristin O'Keefe Aptowicz",
        "href": "https://www.youtube.com/watch?v=pF_N_pZa2WM"
    },
    {
        "title": "\"The Road Not Taken\" by Robert Frost",
        "href": "https://www.youtube.com/watch?v=yGB_K_xlHdI"
    },
    {
        "title": "\"To Make Use of Water\" by Safia Elhillo",
        "href": "https://www.youtube.com/watch?v=kfKDBlK3EwQ"
    },
    {
        "title": "How do ocean currents work? - Jennifer Verduin",
        "href": "https://www.youtube.com/watch?v=p4pWafuvdrY"
    },
    {
        "title": "Why should you read Flannery O’Connor? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=9QVsGWsk7TU"
    },
    {
        "title": "Can you solve the vampire hunter riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=P4-n0IMQSrQ"
    },
    {
        "title": "How CRISPR lets you edit DNA - Andrea M. Henle",
        "href": "https://www.youtube.com/watch?v=6tw_JVz_IEc"
    },
    {
        "title": "Why should you read “Fahrenheit 451”? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=YMZcp0EQO2s"
    },
    {
        "title": "A day in the life of a Mongolian queen - Anne F. Broadbridge",
        "href": "https://www.youtube.com/watch?v=wz4k6d2reAI"
    },
    {
        "title": "The myth of Pandora’s box - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=pMdJxVjZMRI"
    },
    {
        "title": "The truth about electroconvulsive therapy (ECT) - Helen M. Farrell",
        "href": "https://www.youtube.com/watch?v=AcmarVpo2xE"
    },
    {
        "title": "Can you solve the multiplying rabbits riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=XU5L4Sr93-g"
    },
    {
        "title": "Can you survive nuclear fallout? -  Brooke Buddemeier and Jessica S. Wieder",
        "href": "https://www.youtube.com/watch?v=GHBb25lzNVM"
    },
    {
        "title": "How Thor got his hammer - Scott A. Mellor",
        "href": "https://www.youtube.com/watch?v=Qytj-DbXMKQ"
    },
    {
        "title": "The history of the world according to cats - Eva-Maria Geigl",
        "href": "https://www.youtube.com/watch?v=Jsj-hDW9bS8"
    },
    {
        "title": "Can you solve the troll’s paradox riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=mS5eEhLN57s"
    },
    {
        "title": "The sneakiest tricksters of the animal kingdom - Eldridge Adams",
        "href": "https://www.youtube.com/watch?v=40KRCazHyuw"
    },
    {
        "title": "From enslavement to rebel gladiator: The life of Spartacus - Fiona Radford",
        "href": "https://www.youtube.com/watch?v=8l1NyR6UvxU"
    },
    {
        "title": "A brie(f) history of cheese - Paul Kindstedt",
        "href": "https://www.youtube.com/watch?v=QKae1k1BDdA"
    },
    {
        "title": "Inside the killer whale matriarchy - Darren Croft",
        "href": "https://www.youtube.com/watch?v=sQpGT1BgdX4"
    },
    {
        "title": "The dangerous race for the South Pole - Elizabeth Leane",
        "href": "https://www.youtube.com/watch?v=Ts3LIirgDbU"
    },
    {
        "title": "Are we running out of clean water? - Balsher Singh Sidhu",
        "href": "https://www.youtube.com/watch?v=OCzYdNSJF-k"
    },
    {
        "title": "Can you solve the time travel riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=ukUPojrPFPA"
    },
    {
        "title": "Why should you read \"A Midsummer Night's Dream\"? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=xCI6o-kbqrs"
    },
    {
        "title": "Why should you read Kurt Vonnegut? -  Mia Nacamulli",
        "href": "https://www.youtube.com/watch?v=cwwK7NmfF9w"
    },
    {
        "title": "Can you solve the giant iron riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=BSF9s0gbJ2M"
    },
    {
        "title": "Who decides what art means? - Hayley Levitt",
        "href": "https://www.youtube.com/watch?v=HoXyw909Qu0"
    },
    {
        "title": "The life cycle of a neutron star - David Lunney",
        "href": "https://www.youtube.com/watch?v=fFeV8WxIZLk"
    },
    {
        "title": "Why is meningitis so dangerous? - Melvin Sanicas",
        "href": "https://www.youtube.com/watch?v=IaQdv_dBDqM"
    },
    {
        "title": "What’s the smallest thing in the universe? - Jonathan Butterworth",
        "href": "https://www.youtube.com/watch?v=ehHoOYqAT_U"
    },
    {
        "title": "The myth of Sisyphus - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=q4pDUxth5fQ"
    },
    {
        "title": "History vs. Henry VIII - Mark Robinson and Alex Gendler",
        "href": "https://www.youtube.com/watch?v=xdZcqAss92w"
    },
    {
        "title": "Can you solve the secret werewolf riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=9gfPZoyMyTU"
    },
    {
        "title": "How far would you have to go to escape gravity? - Rene Laufer",
        "href": "https://www.youtube.com/watch?v=YlxKh4oCKhw"
    },
    {
        "title": "Is fire a solid, a liquid, or a gas? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=YV8TT9LRBrY"
    },
    {
        "title": "What causes heartburn? - Rusha Modi",
        "href": "https://www.youtube.com/watch?v=jP-9AD0wMOk"
    },
    {
        "title": "The fascinating history of cemeteries - Keith Eggener",
        "href": "https://www.youtube.com/watch?v=8HegwRtbDSU"
    },
    {
        "title": "How rollercoasters affect your body - Brian D. Avery",
        "href": "https://www.youtube.com/watch?v=BunU6CTmhFw"
    },
    {
        "title": "Can you solve the stolen rubies riddle? - Dennis Shasha",
        "href": "https://www.youtube.com/watch?v=2QJ2L2ip32w"
    },
    {
        "title": "Does time exist? - Andrew Zimmerman Jones",
        "href": "https://www.youtube.com/watch?v=R3tbVHlsKhs"
    },
    {
        "title": "The princess who rewrote history - Leonora Neville",
        "href": "https://www.youtube.com/watch?v=jhcih25Z9vI"
    },
    {
        "title": "Why can't some birds fly? -  Gillian Gibb",
        "href": "https://www.youtube.com/watch?v=hRzRjHzvOts"
    },
    {
        "title": "What if cracks in concrete could fix themselves? - Congrui Jin",
        "href": "https://www.youtube.com/watch?v=znSeL66e8qE"
    },
    {
        "title": "Why should you read \"Waiting For Godot\"? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=Cz5ey3RqDBI"
    },
    {
        "title": "History through the eyes of a chicken - Chris A. Kniesly",
        "href": "https://www.youtube.com/watch?v=KsuesiVJgtI"
    },
    {
        "title": "Can you solve the killer robo-ants riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=zoZVuqP1rQM"
    },
    {
        "title": "Why should you read \"Don Quixote\"? - Ilan Stavans",
        "href": "https://www.youtube.com/watch?v=dDUPu6tMWHY"
    },
    {
        "title": "Can you still feel a limb that's gone? - Joshua W. Pate",
        "href": "https://www.youtube.com/watch?v=KdihphPp1Q0"
    },
    {
        "title": "Everything you need to know to read “The Canterbury Tales” - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=h0ZrBr9DOwA"
    },
    {
        "title": "What’s a smartphone made of? - Kim Preshoff",
        "href": "https://www.youtube.com/watch?v=eIdJ22AfsO8"
    },
    {
        "title": "How much will you change in the future? More than you think - Bence Nanay",
        "href": "https://www.youtube.com/watch?v=kfDvdYj0_fA"
    },
    {
        "title": "The myth of Hercules: 12 labors in 8-bits - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=nIIjhAuC76g"
    },
    {
        "title": "Can you solve the alien probe riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=SXXrQlJoNsw"
    },
    {
        "title": "Could the Earth be swallowed by a black hole? - Fabio Pacucci",
        "href": "https://www.youtube.com/watch?v=e9TLbZuvsko"
    },
    {
        "title": "Why should you read Edgar Allan Poe? - Scott Peeples",
        "href": "https://www.youtube.com/watch?v=8lgg-pVjOok&t=2s"
    },
    {
        "title": "What would happen if every human suddenly disappeared? - Dan Kwartler",
        "href": "https://www.youtube.com/watch?v=v6Agqm4K7Ok"
    },
    {
        "title": "How do cigarettes affect the body? - Krishna Sudhir",
        "href": "https://www.youtube.com/watch?v=Y18Vz51Nkos&t=29s"
    },
    {
        "title": "Is there any truth to the King Arthur legends? - Alan Lupack",
        "href": "https://www.youtube.com/watch?v=RBsY88Lir-A"
    },
    {
        "title": "Can you solve the rebel supplies riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=3viZhIumUNo"
    },
    {
        "title": "What is the universe expanding into? - Sajan Saini",
        "href": "https://www.youtube.com/watch?v=6PiyUjVxukI"
    },
    {
        "title": "Does stress affect your memory? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=hyg7lcU4g8E"
    },
    {
        "title": "Why should you read \"One Hundred Years of Solitude\"? - Francisco Díez-Buzo",
        "href": "https://www.youtube.com/watch?v=B2zhLYz4pYo"
    },
    {
        "title": "What is imposter syndrome and how can you combat it? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=ZQUxL4Jm1Lo"
    },
    {
        "title": "Can you solve the Leonardo da Vinci riddle? - Tanya Khovanova",
        "href": "https://www.youtube.com/watch?v=lRfdMiURV4s"
    },
    {
        "title": "Why is Aristophanes called \"The Father of Comedy\"? - Mark Robinson",
        "href": "https://www.youtube.com/watch?v=arQ6U3ev5ic"
    },
    {
        "title": "Zen kōans: Unsolvable enigmas designed to break your brain - Puqun Li",
        "href": "https://www.youtube.com/watch?v=9p5Oi4wPVVo"
    },
    {
        "title": "What really happened to the Library of Alexandria? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=jvWncVbXfJ0"
    },
    {
        "title": "How the Normans changed the history of Europe - Mark Robinson",
        "href": "https://www.youtube.com/watch?v=Owf5Uq4oFps"
    },
    {
        "title": "Can you solve the rogue AI riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=qMFpOcLroOg"
    },
    {
        "title": "Why does your voice change as you get older? - Shaylin A. Schundler",
        "href": "https://www.youtube.com/watch?v=rjibeBSnpJ0"
    },
    {
        "title": "Did ancient Troy really exist? - Einav Zamir Dembin",
        "href": "https://www.youtube.com/watch?v=gQbZX9JEQsQ"
    },
    {
        "title": "How can you change someone's mind? (hint: facts aren't always enough) - Hugo Mercier",
        "href": "https://www.youtube.com/watch?v=58jHhNzUHm4"
    },
    {
        "title": "The breathtaking courage of Harriet Tubman - Janell Hobson",
        "href": "https://www.youtube.com/watch?v=Dv7YhVKFqbQ"
    },
    {
        "title": "A day in the life of an ancient Egyptian doctor - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=2rvLEJrQm7g"
    },
    {
        "title": "History vs. Augustus - Peta Greenfield & Alex Gendler",
        "href": "https://www.youtube.com/watch?v=QrcmojhFmzY"
    },
    {
        "title": "How exactly does binary code work? - José Américo N L F de Freitas",
        "href": "https://www.youtube.com/watch?v=wgbV6DLVezo"
    },
    {
        "title": "What is the coldest thing in the world? - Lina Marieth Hoyos",
        "href": "https://www.youtube.com/watch?v=W6aL9YyRx1A"
    },
    {
        "title": "Why don’t poisonous animals poison themselves? - Rebecca D. Tarvin",
        "href": "https://www.youtube.com/watch?v=-sEpBGF106k"
    },
    {
        "title": "Are there universal expressions of emotion? - Sophie Zadeh",
        "href": "https://www.youtube.com/watch?v=-hr58Yu0yDs"
    },
    {
        "title": "Can you solve the Mondrian squares riddle? - Gordon Hamilton",
        "href": "https://www.youtube.com/watch?v=AWcY2-FBa9k"
    },
    {
        "title": "How much of what you see is a hallucination? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=4DlipN61jGA"
    },
    {
        "title": "The psychology of post-traumatic stress disorder - Joelle Rabow Maletis",
        "href": "https://www.youtube.com/watch?v=b_n9qegR7C4"
    },
    {
        "title": "How do your hormones work? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=-SPRPkLoKp8"
    },
    {
        "title": "The science of hearing - Douglas L. Oliver",
        "href": "https://www.youtube.com/watch?v=LkGOGzpbrCk"
    },
    {
        "title": "Did the Amazons really exist? - Adrienne Mayor",
        "href": "https://www.youtube.com/watch?v=iYL5CLJ2prA"
    },
    {
        "title": "What causes insomnia? - Dan Kwartler",
        "href": "https://www.youtube.com/watch?v=j5Sl8LyI7k8"
    },
    {
        "title": "The Irish myth of the Giant's Causeway - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=aQbyVYUob1o"
    },
    {
        "title": "Can you solve the giant cat army riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=YeMVoJKn1Tg"
    },
    {
        "title": "How one scientist averted a national health crisis - Andrea Tone",
        "href": "https://www.youtube.com/watch?v=4wIBCoxuOJ0"
    },
    {
        "title": "Would you live on the moon? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=I5V2tcg1BvQ"
    },
    {
        "title": "Can you solve the penniless pilgrim riddle? - Daniel Finkel",
        "href": "https://www.youtube.com/watch?v=6sBB-gRhfjE"
    },
    {
        "title": "Why is it so hard to cure ALS? - Fernando G. Vieira",
        "href": "https://www.youtube.com/watch?v=P9CEzFYCWMo"
    },
    {
        "title": "Are naked mole rats the strangest mammals? - Thomas Park",
        "href": "https://www.youtube.com/watch?v=2sKADUBfdMk"
    },
    {
        "title": "What is dust made of? - Michael Marder",
        "href": "https://www.youtube.com/watch?v=P21a5Uty-uc"
    },
    {
        "title": "Can you solve the wizard standoff riddle? - Dan Finkel",
        "href": "https://www.youtube.com/watch?v=mmkCS5eA4f8"
    },
    {
        "title": "How to stay calm under pressure - Noa Kageyama and Pen-Pen Chen",
        "href": "https://www.youtube.com/watch?v=CqgmozFr_GM"
    },
    {
        "title": "The journey to Pluto, the farthest world ever explored - Alan Stern",
        "href": "https://www.youtube.com/watch?v=vyUnzfMh-zA"
    },
    {
        "title": "Why do we sweat? - John Murnan",
        "href": "https://www.youtube.com/watch?v=fctH_1NuqCQ"
    },
    {
        "title": "How squids outsmart their predators - Carly Anne York",
        "href": "https://www.youtube.com/watch?v=cpJlQo_65Ko"
    },
    {
        "title": "When will the next ice age happen? - Lorraine Lisiecki",
        "href": "https://www.youtube.com/watch?v=I4EZCy14te0"
    },
    {
        "title": "Can you solve the false positive riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=1csFTDXXULY"
    },
    {
        "title": "What causes constipation? - Heba Shaheed",
        "href": "https://www.youtube.com/watch?v=0IVO50DuMCs"
    },
    {
        "title": "How does hibernation work? - Sheena Lee Faherty",
        "href": "https://www.youtube.com/watch?v=xptpXSTtgSY"
    },
    {
        "title": "How to build a dark matter detector - Jenna Saffin",
        "href": "https://www.youtube.com/watch?v=PxzNo58pE2c"
    },
    {
        "title": "Which is stronger: Glue or tape? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=HHuTrcXNxOk"
    },
    {
        "title": "How do brain scans work? - John Borghi and Elizabeth Waters",
        "href": "https://www.youtube.com/watch?v=B10pc0Kizsc"
    },
    {
        "title": "The rise and fall of the Assyrian Empire - Marian H Feldman",
        "href": "https://www.youtube.com/watch?v=7pa54hWROpQ"
    },
    {
        "title": "Why can't you divide by zero? - TED-Ed",
        "href": "https://www.youtube.com/watch?v=NKmGVE85GUU"
    },
    {
        "title": "How the world's first metro system was built - Christian Wolmar",
        "href": "https://www.youtube.com/watch?v=VdZd5zYTKAw"
    },
    {
        "title": "Why are fish fish-shaped? - Lauren Sallan",
        "href": "https://www.youtube.com/watch?v=Cd-artSbpXc"
    },
    {
        "title": "The surprising reasons animals play dead - Tierney Thys",
        "href": "https://www.youtube.com/watch?v=_hBAr7uJ6L8"
    },
    {
        "title": "What causes headaches? - Dan Kwartler",
        "href": "https://www.youtube.com/watch?v=KpHP8VmxnBo"
    },
    {
        "title": "The Cambodian myth of lightning, thunder, and rain - Prumsodun Ok",
        "href": "https://www.youtube.com/watch?v=Ul9ysDvkuLA"
    },
    {
        "title": "The rise and fall of the Byzantine Empire - Leonora Neville",
        "href": "https://www.youtube.com/watch?v=Okph9wt8I0A"
    },
    {
        "title": "What causes body odor? - Mel Rosenberg",
        "href": "https://www.youtube.com/watch?v=g96z1P3z5yU"
    },
    {
        "title": "A simple way to tell insects apart - Anika Hazra",
        "href": "https://www.youtube.com/watch?v=BvLolPN8NvU"
    },
    {
        "title": "The most successful pirate of all time - Dian Murray",
        "href": "https://www.youtube.com/watch?v=6BALmDghybk"
    },
    {
        "title": "A day in the life of a Roman soldier - Robert Garland",
        "href": "https://www.youtube.com/watch?v=P5e7cl19Ha0"
    },
    {
        "title": "Why isn't the world covered in poop? - Eleanor Slade and Paul Manning",
        "href": "https://www.youtube.com/watch?v=uSTNyHkde08"
    },
    {
        "title": "Can you solve the buried treasure riddle? - Daniel Griller",
        "href": "https://www.youtube.com/watch?v=tCeklW2e6_E"
    },
    {
        "title": "Cannibalism in the animal kingdom - Bill Schutt",
        "href": "https://www.youtube.com/watch?v=bVMVxJJ7P8M"
    },
    {
        "title": "A day in the life of an ancient Athenian - Robert Garland",
        "href": "https://www.youtube.com/watch?v=ar8S6virCwM"
    },
    {
        "title": "The science of skin - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=OxPlCkTKhzY"
    },
    {
        "title": "Why should you read \"The Handmaid's Tale\"? - Naomi R. Mercer",
        "href": "https://www.youtube.com/watch?v=7v-mfJMyBO0"
    },
    {
        "title": "The myth of King Midas and his golden touch - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=nn8YGPZdCvA"
    },
    {
        "title": "The life cycle of the butterfly - Franziska Bauer",
        "href": "https://www.youtube.com/watch?v=rcAN4rkTmNU"
    },
    {
        "title": "Can you solve the seven planets riddle? - Edwin F. Meyer",
        "href": "https://www.youtube.com/watch?v=dh4nEuhZBgg"
    },
    {
        "title": "The myth of Thor's journey to the land of giants - Scott A. Mellor",
        "href": "https://www.youtube.com/watch?v=e6XeP9gQPmg"
    },
    {
        "title": "The surprising reason birds sing - Partha P. Mitra",
        "href": "https://www.youtube.com/watch?v=r5_ZSnFDPRg"
    },
    {
        "title": "The coin flip conundrum - Po-Shen Loh",
        "href": "https://www.youtube.com/watch?v=IAiNqQi30-Y"
    },
    {
        "title": "The rise and fall of the Inca Empire - Gordon McEwan",
        "href": "https://www.youtube.com/watch?v=UO5ktwPXsyM"
    },
    {
        "title": "The myth of Arachne  - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=XvUHcsZOhJ8"
    },
    {
        "title": "How did teeth evolve? - Peter S. Ungar",
        "href": "https://www.youtube.com/watch?v=wrPEjEqURJg"
    },
    {
        "title": "What happens during a stroke? - Vaibhav Goswami",
        "href": "https://www.youtube.com/watch?v=-NJm4TJ2it0"
    },
    {
        "title": "Why is NASA sending a spacecraft to a metal world? - Linda T. Elkins-Tanton",
        "href": "https://www.youtube.com/watch?v=1JXq9779zwU"
    },
    {
        "title": "Ugly history: The 1937 Haitian Massacre - Edward Paulino",
        "href": "https://www.youtube.com/watch?v=x25k_-Katf4"
    },
    {
        "title": "Can you solve the dark coin riddle? - Lisa Winer",
        "href": "https://www.youtube.com/watch?v=pnSw8g3DPHw"
    },
    {
        "title": "The myth of Oisín and the land of eternal youth - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=1nFcXcPldzY"
    },
    {
        "title": "What are mini brains? - Madeline Lancaster",
        "href": "https://www.youtube.com/watch?v=s_LxZx42sIk"
    },
    {
        "title": "The tragic myth of Orpheus and Eurydice - Brendan Pelsue",
        "href": "https://www.youtube.com/watch?v=RhaepLsP5eg"
    },
    {
        "title": "How does your immune system work? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=PSRJfaAYkW4"
    },
    {
        "title": "Who's at risk for colon cancer? - Amit H. Sachdev and Frank G. Gress",
        "href": "https://www.youtube.com/watch?v=H5zin8jKeT0"
    },
    {
        "title": "How to manage your time more effectively (according to machines) - Brian Christian",
        "href": "https://www.youtube.com/watch?v=iDbdXTMnOmE"
    },
    {
        "title": "Why should you read Charles Dickens? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=5czA_L_eOp4"
    },
    {
        "title": "Why do animals form swarms? - Maria R. D'Orsogna",
        "href": "https://www.youtube.com/watch?v=y6u1GPpJuR4"
    },
    {
        "title": "How your digestive system works - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=Og5xAdC8EUI"
    },
    {
        "title": "Why is Herodotus called “The Father of History”? - Mark Robinson",
        "href": "https://www.youtube.com/watch?v=A542ixwyBhc"
    },
    {
        "title": "Can 100% renewable energy power the world? - Federico Rosei and Renzo Rosei",
        "href": "https://www.youtube.com/watch?v=RnvCbquYeIM"
    },
    {
        "title": "How long will human impacts last? - David Biello",
        "href": "https://www.youtube.com/watch?v=Zsc8G0NnMTs"
    },
    {
        "title": "How do fish make electricity? - Eleanor Nelsen",
        "href": "https://www.youtube.com/watch?v=z0M7_HPSi14"
    },
    {
        "title": "History vs. Che Guevara - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=tjrvKA4w9-Y"
    },
    {
        "title": "What is the tragedy of the commons? - Nicholas Amendolare",
        "href": "https://www.youtube.com/watch?v=CxC161GvMPc"
    },
    {
        "title": "How often should you get a flu shot? - Melvin Sanicas",
        "href": "https://www.youtube.com/watch?v=FZ_jNGKCIWs"
    },
    {
        "title": "The complicated history of surfing - Scott Laderman",
        "href": "https://www.youtube.com/watch?v=jyn_orqdyHQ"
    },
    {
        "title": "The myth of Prometheus - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=U_u91SjrEOE"
    },
    {
        "title": "How does your body know you're full? - Hilary Coller",
        "href": "https://www.youtube.com/watch?v=YVfyYrEmzgM"
    },
    {
        "title": "Why incompetent people think they're amazing - David Dunning",
        "href": "https://www.youtube.com/watch?v=pOLmD_WVY-E&t=8s"
    },
    {
        "title": "Can you solve the egg drop riddle? - Yossi Elran",
        "href": "https://www.youtube.com/watch?v=NGtt7GJ1uiM"
    },
    {
        "title": "How many verb tenses are there in English? - Anna Ananichuk",
        "href": "https://www.youtube.com/watch?v=54prMaPn5Ls"
    },
    {
        "title": "Why should you read \"Macbeth\"? - Brendan Pelsue",
        "href": "https://www.youtube.com/watch?v=rD5goS69LT4"
    },
    {
        "title": "How to make your writing suspenseful - Victoria Smith",
        "href": "https://www.youtube.com/watch?v=xjKruwAfZWk"
    },
    {
        "title": "Where do math symbols come from? - John David Walters",
        "href": "https://www.youtube.com/watch?v=eVm063xmnow"
    },
    {
        "title": "How your muscular system works - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=VVL-8zr2hk4"
    },
    {
        "title": "Why should you read James Joyce's \"Ulysses\"? - Sam Slote",
        "href": "https://www.youtube.com/watch?v=X7FobPxu27M"
    },
    {
        "title": "What in the world is topological quantum matter? - Fan Zhang",
        "href": "https://www.youtube.com/watch?v=GJHhnr9R_ZM"
    },
    {
        "title": "Why should you read Virgil's \"Aeneid\"? - Mark Robinson",
        "href": "https://www.youtube.com/watch?v=p4mbk59rbjE"
    },
    {
        "title": "How did Polynesian wayfinders navigate the Pacific Ocean? - Alan Tamayose and Shantell De Silva",
        "href": "https://www.youtube.com/watch?v=m8bDCaPhOek"
    },
    {
        "title": "The first asteroid ever discovered - Carrie Nugent",
        "href": "https://www.youtube.com/watch?v=VKMWqOfbGME"
    },
    {
        "title": "Explore cave paintings in this 360° animated cave - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=CX4KuIBmnjI"
    },
    {
        "title": "Why is it so hard to cure cancer? - Kyuson Yun",
        "href": "https://www.youtube.com/watch?v=h2rR77VsF5c"
    },
    {
        "title": "Is DNA the future of data storage? - Leo Bear-McGuinness",
        "href": "https://www.youtube.com/watch?v=r8qWc9X4f6k"
    },
    {
        "title": "Why should you read Virginia Woolf? - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=DcMLkce_BLg"
    },
    {
        "title": "The strange case of the cyclops sheep - Tien Nguyen",
        "href": "https://www.youtube.com/watch?v=Fzz-Pblbvqw"
    },
    {
        "title": "How aspirin was discovered - Krishna Sudhir",
        "href": "https://www.youtube.com/watch?v=uRhkDN2WjzI"
    },
    {
        "title": "The surprising cause of stomach ulcers - Rusha Modi",
        "href": "https://www.youtube.com/watch?v=V_U6czbDHLE"
    },
    {
        "title": "A brief history of banned numbers - Alessandra King",
        "href": "https://www.youtube.com/watch?v=VmWVXOIQblM"
    },
    {
        "title": "Are you a body with a mind or a mind with a body? - Maryam Alimardani",
        "href": "https://www.youtube.com/watch?v=ILDy6kYU-xQ"
    },
    {
        "title": "Why do we harvest horseshoe crab blood? - Elizabeth Cox",
        "href": "https://www.youtube.com/watch?v=VgEbcQxFUu8"
    },
    {
        "title": "Should we get rid of standardized testing? - Arlo Kempf",
        "href": "https://www.youtube.com/watch?v=YtE0OsRWeYI"
    },
    {
        "title": "How do executive orders work? - Christina Greer",
        "href": "https://www.youtube.com/watch?v=oyOf3g-PJ94"
    },
    {
        "title": "What are gravitational waves? - Amber L. Stuver",
        "href": "https://www.youtube.com/watch?v=hebGhsNsjG0"
    },
    {
        "title": "Is it possible to create a perfect vacuum? - Rolf Landua and Anais Rassat",
        "href": "https://www.youtube.com/watch?v=_rJOSDgDG0A"
    },
    {
        "title": "How many ways are there to prove the Pythagorean theorem? - Betty Fei",
        "href": "https://www.youtube.com/watch?v=YompsDlEdtc"
    },
    {
        "title": "Where do new words come from? - Marcel Danesi",
        "href": "https://www.youtube.com/watch?v=Ytr28t5VzAs"
    },
    {
        "title": "The life cycle of a t-shirt - Angel Chang",
        "href": "https://www.youtube.com/watch?v=BiSYoeqb_VY"
    },
    {
        "title": "The science of smog - Kim Preshoff",
        "href": "https://www.youtube.com/watch?v=CdbBwIgq4rs"
    },
    {
        "title": "The amazing ways plants defend themselves - Valentin Hammoudi",
        "href": "https://www.youtube.com/watch?v=Hja0SLs2kus"
    },
    {
        "title": "How does impeachment work? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=hSszixvo7d8"
    },
    {
        "title": "Cell membranes are way more complicated than you think - Nazzy Pakpour",
        "href": "https://www.youtube.com/watch?v=nsklF1w4eok"
    },
    {
        "title": "Could we create dark matter? - Rolf Landua",
        "href": "https://www.youtube.com/watch?v=h2MlS09KJP4"
    },
    {
        "title": "The rise and fall of the Berlin Wall - Konrad H. Jarausch",
        "href": "https://www.youtube.com/watch?v=A9fQPzZ1-hg"
    },
    {
        "title": "TED-Ed is on Patreon! We need your help to revolutionize education...",
        "href": "https://www.youtube.com/watch?v=1kSEmgIJNqE"
    },
    {
        "title": "Will the ocean ever run out of fish? - Ayana Elizabeth Johnson and Jennifer Jacquet",
        "href": "https://www.youtube.com/watch?v=WNdR808jMSA"
    },
    {
        "title": "When is water safe to drink? - Mia Nacamulli",
        "href": "https://www.youtube.com/watch?v=G244Q4AGJ7U"
    },
    {
        "title": "The myth of Cupid and Psyche - Brendan Pelsue",
        "href": "https://www.youtube.com/watch?v=Gjj_-CPxjCM"
    },
    {
        "title": "Will we ever be able to teleport? - Sajan Saini",
        "href": "https://www.youtube.com/watch?v=JMdO5KyjwAw"
    },
    {
        "title": "What happens when you have a concussion? - Clifford Robbins",
        "href": "https://www.youtube.com/watch?v=xvjK-4NXRsM"
    },
    {
        "title": "The left brain vs. right brain myth - Elizabeth Waters",
        "href": "https://www.youtube.com/watch?v=ZMSbDwpIyF4"
    },
    {
        "title": "Can you find the next number in this sequence? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=LpjX3kHXcR0"
    },
    {
        "title": "How does caffeine keep us awake? - Hanan Qasim",
        "href": "https://www.youtube.com/watch?v=foLf5Bi9qXs"
    },
    {
        "title": "How does fracking work? - Mia Nacamulli",
        "href": "https://www.youtube.com/watch?v=Tudal_4x4F0"
    },
    {
        "title": "How to spot a misleading graph - Lea Gaslowitz",
        "href": "https://www.youtube.com/watch?v=E91bGT9BjYk"
    },
    {
        "title": "What causes kidney stones? - Arash Shadman",
        "href": "https://www.youtube.com/watch?v=W0GpIMNTPYg"
    },
    {
        "title": "How do drugs affect the brain? - Sara Garofalo",
        "href": "https://www.youtube.com/watch?v=8qK0hxuXOC8"
    },
    {
        "title": "Can you solve the fish riddle? -  Steve Wyborney",
        "href": "https://www.youtube.com/watch?v=lLOALyWls2k"
    },
    {
        "title": "Who built Great Zimbabwe? And why? - Breeanna Elliott",
        "href": "https://www.youtube.com/watch?v=quzjmZ-7s6w"
    },
    {
        "title": "How to squeeze electricity out of crystals - Ashwini Bharathula",
        "href": "https://www.youtube.com/watch?v=YEJ2qryXcIQ"
    },
    {
        "title": "The philosophy of Stoicism - Massimo Pigliucci",
        "href": "https://www.youtube.com/watch?v=R9OCA6UFE-0"
    },
    {
        "title": "What can you learn from ancient skeletons? - Farnaz Khatibi",
        "href": "https://www.youtube.com/watch?v=T24hdchCVIg"
    },
    {
        "title": "The power of creative constraints - Brandon Rodriguez",
        "href": "https://www.youtube.com/watch?v=v5FL9VTBZzQ"
    },
    {
        "title": "Why do people join cults? - Janja Lalich",
        "href": "https://www.youtube.com/watch?v=kB-dJaCXAxA"
    },
    {
        "title": "The genius of Marie Curie - Shohini Ghose",
        "href": "https://www.youtube.com/watch?v=w6JFRi0Qm_s"
    },
    {
        "title": "The ferocious predatory dinosaurs of Cretaceous Sahara - Nizar Ibrahim",
        "href": "https://www.youtube.com/watch?v=8RI0JnB_OaE"
    },
    {
        "title": "Why don't perpetual motion machines ever work? - Netta Schramm",
        "href": "https://www.youtube.com/watch?v=A-QgGXbDyR0"
    },
    {
        "title": "How the bendy straw was invented | Moments of Vision 12 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=9keTby6wcrk"
    },
    {
        "title": "Who were the Vestal Virgins, and what was their job? - Peta Greenfield",
        "href": "https://www.youtube.com/watch?v=ER0Cu0KQFqM"
    },
    {
        "title": "The world’s most mysterious book - Stephen Bax",
        "href": "https://www.youtube.com/watch?v=8NS4CbBJQ84"
    },
    {
        "title": "How does money laundering work? - Delena D. Spann",
        "href": "https://www.youtube.com/watch?v=257wV-AbKaE"
    },
    {
        "title": "History’s deadliest colors - J. V. Maranto",
        "href": "https://www.youtube.com/watch?v=gKfjHTk8KrY"
    },
    {
        "title": "A brief history of goths - Dan Adams",
        "href": "https://www.youtube.com/watch?v=STOJftffOqs"
    },
    {
        "title": "The history of tea - Shunan Teng",
        "href": "https://www.youtube.com/watch?v=LaLvVc1sS20"
    },
    {
        "title": "How does your body process medicine? - Céline Valéry",
        "href": "https://www.youtube.com/watch?v=uOcpsXMJcJk"
    },
    {
        "title": "How does asthma work? - Christopher E. Gaw",
        "href": "https://www.youtube.com/watch?v=PzfLDi-sL3w"
    },
    {
        "title": "What is entropy? - Jeff Phillips",
        "href": "https://www.youtube.com/watch?v=YM-uykVfq_E"
    },
    {
        "title": "How do nuclear power plants work? - M. V. Ramana and Sajan Saini",
        "href": "https://www.youtube.com/watch?v=R7WPEYGr1Vs"
    },
    {
        "title": "Check your intuition: The birthday problem - David Knuffke",
        "href": "https://www.youtube.com/watch?v=KtT_cgMzHx8"
    },
    {
        "title": "How the popsicle was invented | Moments of Vision 11 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=yA00JNZYu7k"
    },
    {
        "title": "Can you solve the pirate riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=Mc6VA7Q1vXQ"
    },
    {
        "title": "Why should you read Tolstoy's \"War and Peace\"? - Brendan Pelsue",
        "href": "https://www.youtube.com/watch?v=4dn7TEjnbPY"
    },
    {
        "title": "Why are sloths so slow? - Kenny Coogan",
        "href": "https://www.youtube.com/watch?v=-64U7WoBrqM"
    },
    {
        "title": "The evolution of animal genitalia - Menno Schilthuizen",
        "href": "https://www.youtube.com/watch?v=vcPJkz-D5II"
    },
    {
        "title": "How did Dracula become the world's most famous vampire? - Stanley Stepanic",
        "href": "https://www.youtube.com/watch?v=7uiyz3139tE"
    },
    {
        "title": "Secrets of the X chromosome - Robin Ball",
        "href": "https://www.youtube.com/watch?v=veB31XmUQm8"
    },
    {
        "title": "The three different ways mammals give birth - Kate Slabosky",
        "href": "https://www.youtube.com/watch?v=sz3Yv3On4lE"
    },
    {
        "title": "Oxygen’s surprisingly complex journey through your body - Enda Butler",
        "href": "https://www.youtube.com/watch?v=GVU_zANtroE"
    },
    {
        "title": "Why do we itch? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=0NGei3H8yRk"
    },
    {
        "title": "How do focus groups work? - Hector Lanz",
        "href": "https://www.youtube.com/watch?v=3TwgVQIZPsw"
    },
    {
        "title": "How blue jeans were invented | Moments of Vision 10 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=SCRYuUlU_Gs"
    },
    {
        "title": "Why do animals have such different lifespans? - Joao Pedro de Magalhaes",
        "href": "https://www.youtube.com/watch?v=7m8QlSPP7t0"
    },
    {
        "title": "Can you solve the virus riddle? - Lisa Winer",
        "href": "https://www.youtube.com/watch?v=ZKh6z0X6KRw"
    },
    {
        "title": "How Magellan circumnavigated the globe - Ewandro Magalhaes",
        "href": "https://www.youtube.com/watch?v=pFdiX8mj0Es"
    },
    {
        "title": "Jellyfish predate dinosaurs. How have they survived so long? - David Gruber",
        "href": "https://www.youtube.com/watch?v=yQduHyiWe9o"
    },
    {
        "title": "Why do people get so anxious about math? - Orly Rubinsten",
        "href": "https://www.youtube.com/watch?v=7snnRaC4t5c"
    },
    {
        "title": "How the food you eat affects your gut - Shilpa Ravella",
        "href": "https://www.youtube.com/watch?v=1sISguPDlhY"
    },
    {
        "title": "Meet the tardigrade, the toughest animal on Earth - Thomas Boothby",
        "href": "https://www.youtube.com/watch?v=IxndOd3kmSs"
    },
    {
        "title": "What makes a poem … a poem? - Melissa Kovacs",
        "href": "https://www.youtube.com/watch?v=JwhouCNq-Fc"
    },
    {
        "title": "The history of chocolate - Deanna Pucciarelli",
        "href": "https://www.youtube.com/watch?v=ibjUpk9Iagk"
    },
    {
        "title": "What is McCarthyism? And how did it happen? - Ellen Schrecker",
        "href": "https://www.youtube.com/watch?v=N35IugBYH04"
    },
    {
        "title": "The myth of Icarus and Daedalus - Amy Adkins",
        "href": "https://www.youtube.com/watch?v=3s2QPQnuaGk"
    },
    {
        "title": "Where do superstitions come from? - Stuart Vyse",
        "href": "https://www.youtube.com/watch?v=quOdF1CAPXs"
    },
    {
        "title": "How Braille was invented | Moments of Vision 9 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=cyfxQ6sdaIE"
    },
    {
        "title": "Does \"The Wonderful Wizard of Oz\" have a hidden message? - David B. Parker",
        "href": "https://www.youtube.com/watch?v=7Lg4vjRY4Ts"
    },
    {
        "title": "What happened to trial by jury? - Suja A. Thomas",
        "href": "https://www.youtube.com/watch?v=qVoYFYxGJPg"
    },
    {
        "title": "TED-Ed Clubs: Celebrating and amplifying student voices around the world",
        "href": "https://www.youtube.com/watch?v=U2PG_R4wl-0"
    },
    {
        "title": "Are ghost ships real? - Peter B. Campbell",
        "href": "https://www.youtube.com/watch?v=cURn__xlWXk"
    },
    {
        "title": "How to practice effectively...for just about anything - Annie Bosler and Don Greene",
        "href": "https://www.youtube.com/watch?v=f2O6mQkFiiw"
    },
    {
        "title": "Everything you need to know to read \"Frankenstein\" - Iseult Gillespie",
        "href": "https://www.youtube.com/watch?v=PDgu25Dsv34"
    },
    {
        "title": "Can you solve the three gods riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=LKvjIsyYng8"
    },
    {
        "title": "The exceptional life of Benjamin Banneker - Rose-Margaret Ekeng-Itua",
        "href": "https://www.youtube.com/watch?v=DKnwyVR4P88"
    },
    {
        "title": "What happens during a heart attack? - Krishna Sudhir",
        "href": "https://www.youtube.com/watch?v=3_PYnWVoUzM"
    },
    {
        "title": "How small are we in the scale of the universe? - Alex Hofeldt",
        "href": "https://www.youtube.com/watch?v=WYQ3O8U6SMY"
    },
    {
        "title": "What is bipolar disorder? - Helen M. Farrell",
        "href": "https://www.youtube.com/watch?v=RrWBhVlD1H8"
    },
    {
        "title": "Would winning the lottery make you happier? - Raj Raghunathan",
        "href": "https://www.youtube.com/watch?v=juO4zxsjSjw"
    },
    {
        "title": "How super glue was invented | Moments of Vision 8 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=K2mv7kX3q2s"
    },
    {
        "title": "History vs. Cleopatra - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=Y6EhRwn4zkc"
    },
    {
        "title": "The science of milk - Jonathan J. O'Sullivan",
        "href": "https://www.youtube.com/watch?v=xmNzUEmFZMg"
    },
    {
        "title": "Everything you need to know to read Homer's \"Odyssey\" - Jill Dash",
        "href": "https://www.youtube.com/watch?v=8Z9FQxcCAZ0"
    },
    {
        "title": "The myth behind the Chinese zodiac - Megan Campisi and Pen-Pen Chen",
        "href": "https://www.youtube.com/watch?v=may2s9j4RLk"
    },
    {
        "title": "Mary's Room: A philosophical thought experiment - Eleanor Nelsen",
        "href": "https://www.youtube.com/watch?v=mGYmiQkah4o"
    },
    {
        "title": "The mathematics of sidewalk illusions - Fumiko Futamura",
        "href": "https://www.youtube.com/watch?v=wujEE3PRVUo"
    },
    {
        "title": "A brief history of numerical systems - Alessandra King",
        "href": "https://www.youtube.com/watch?v=cZH0YnFpjwU"
    },
    {
        "title": "How do animals experience pain? - Robyn J. Crook",
        "href": "https://www.youtube.com/watch?v=5j9Syov0AAw"
    },
    {
        "title": "Would you sacrifice one person to save five? - Eleanor Nelsen",
        "href": "https://www.youtube.com/watch?v=yg16u_bzjPE"
    },
    {
        "title": "What’s so great about the Great Lakes? - Cheri Dobbs and Jennifer Gabrys",
        "href": "https://www.youtube.com/watch?v=gBRcOLcEwF0"
    },
    {
        "title": "How to master your sense of smell - Alexandra Horowitz",
        "href": "https://www.youtube.com/watch?v=ynrbxy36erE"
    },
    {
        "title": "What does this symbol actually mean? - Adrian Treharne",
        "href": "https://www.youtube.com/watch?v=ppNYZq-hYTw"
    },
    {
        "title": "Can you solve the counterfeit coin riddle? - Jennifer Lu",
        "href": "https://www.youtube.com/watch?v=tE2dZLDJSjA"
    },
    {
        "title": "How the stethoscope was invented | Moments of Vision 7 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=0bxiOMJAMW8"
    },
    {
        "title": "Why are we so attached to our things? - Christian Jarrett",
        "href": "https://www.youtube.com/watch?v=H2_by0rp5q0"
    },
    {
        "title": "Why do we kiss under mistletoe? - Carlos Reif",
        "href": "https://www.youtube.com/watch?v=QtJqBiF6EF0"
    },
    {
        "title": "Why do airlines sell too many tickets? - Nina Klietsch",
        "href": "https://www.youtube.com/watch?v=ZFNstNKgEDI"
    },
    {
        "title": "Is there a limit to technological progress? - Clément Vidal",
        "href": "https://www.youtube.com/watch?v=zVsHzS70krg"
    },
    {
        "title": "How high can you count on your fingers? (Spoiler: much higher than 10) - James Tanton",
        "href": "https://www.youtube.com/watch?v=UixU1oRW64Q"
    },
    {
        "title": "Why doesn’t anything stick to Teflon? - Ashwini Bharathula",
        "href": "https://www.youtube.com/watch?v=uXaP43Zbz7U"
    },
    {
        "title": "The science of imagination - Andrey Vyshedskiy",
        "href": "https://www.youtube.com/watch?v=e7uXAlXdTe4"
    },
    {
        "title": "How does your body know what time it is? - Marco A. Sotomayor",
        "href": "https://www.youtube.com/watch?v=Y8ZXOfWUbms"
    },
    {
        "title": "How smudge-proof lipstick was invented | Moments of Vision 6 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=MpkDx6nLn1A"
    },
    {
        "title": "Is there a reproducibility crisis in science? - Matt Anticole",
        "href": "https://www.youtube.com/watch?v=FpCrY7x5nEE"
    },
    {
        "title": "Can you solve the airplane riddle? - Judd A. Schorr",
        "href": "https://www.youtube.com/watch?v=dzrwnwOx0fw"
    },
    {
        "title": "Can machines read your emotions? - Kostas Karpouzis",
        "href": "https://www.youtube.com/watch?v=QFk3e5PcK7s"
    },
    {
        "title": "What's the fastest way to alphabetize your bookshelf? - Chand John",
        "href": "https://www.youtube.com/watch?v=WaNLJf8xzC4"
    },
    {
        "title": "The secrets of Mozart’s “Magic Flute” - Joshua Borths",
        "href": "https://www.youtube.com/watch?v=8iKd-P4Bcac"
    },
    {
        "title": "Why do we feel nostalgia? - Clay Routledge",
        "href": "https://www.youtube.com/watch?v=WiTgn5QH_HU"
    },
    {
        "title": "How do US Supreme Court justices get appointed? - Peter Paccone",
        "href": "https://www.youtube.com/watch?v=0xnzGSV66x4"
    },
    {
        "title": "How to recognize a dystopia - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=6a6kbU88wu0"
    },
    {
        "title": "Do we really need pesticides? - Fernan Pérez-Gálvez",
        "href": "https://www.youtube.com/watch?v=GLllZ-qiXJA"
    },
    {
        "title": "Why do whales sing? - Stephanie Sardelis",
        "href": "https://www.youtube.com/watch?v=7Xr9BYhlceA"
    },
    {
        "title": "Are food preservatives bad for you? - Eleanor Nelsen",
        "href": "https://www.youtube.com/watch?v=ZJU34yTJL4M"
    },
    {
        "title": "Why are sharks so awesome? - Tierney Thys",
        "href": "https://www.youtube.com/watch?v=svlEfxTyJQE"
    },
    {
        "title": "How the sandwich was invented | Moments of Vision 5 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=7k6n46xBTxs"
    },
    {
        "title": "Can you solve the river crossing riddle? - Lisa Winer",
        "href": "https://www.youtube.com/watch?v=ADR7dUoVh_c"
    },
    {
        "title": "The Egyptian Book of the Dead: A guidebook for the underworld - Tejal Gala",
        "href": "https://www.youtube.com/watch?v=1yv_MXNYbAo"
    },
    {
        "title": "What caused the French Revolution? - Tom Mullaney",
        "href": "https://www.youtube.com/watch?v=PBn7iWzrKoI"
    },
    {
        "title": "Plato’s best (and worst) ideas - Wisecrack",
        "href": "https://www.youtube.com/watch?v=jLesc5lITvo"
    },
    {
        "title": "Why should you listen to Vivaldi's \"Four Seasons\"? - Betsy Schwarm",
        "href": "https://www.youtube.com/watch?v=Xcpc8VDsv3c"
    },
    {
        "title": "How much of human history is on the bottom of the ocean? - Peter Campbell",
        "href": "https://www.youtube.com/watch?v=kSBB5PsRV-k"
    },
    {
        "title": "Why is Vermeer's \"Girl with the Pearl Earring\" considered a masterpiece? - James Earle",
        "href": "https://www.youtube.com/watch?v=pM_IzEAv5d4"
    },
    {
        "title": "What causes cavities? - Mel Rosenberg",
        "href": "https://www.youtube.com/watch?v=zGoBFU1q4g0"
    },
    {
        "title": "What happens to our bodies after we die? - Farnaz Khatibi Jafari",
        "href": "https://www.youtube.com/watch?v=mRsa2wb0aTs"
    },
    {
        "title": "How the rubber glove was invented | Moments of Vision 4 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=2qlcO3xUz3Q"
    },
    {
        "title": "Is it bad to hold your pee? - Heba Shaheed",
        "href": "https://www.youtube.com/watch?v=Ze4Qmpq48AQ"
    },
    {
        "title": "How does the Nobel Peace Prize work? - Adeline Cuvelier and Toril Rokseth",
        "href": "https://www.youtube.com/watch?v=rXhpK_lhonA"
    },
    {
        "title": "Could we survive prolonged space travel? - Lisa Nip",
        "href": "https://www.youtube.com/watch?v=upp9-w6GPhU"
    },
    {
        "title": "Can you solve the prisoner boxes riddle? - Yossi Elran",
        "href": "https://www.youtube.com/watch?v=vIdStMTgNl0"
    },
    {
        "title": "Could human civilization spread across the whole galaxy? - Roey Tzezana",
        "href": "https://www.youtube.com/watch?v=Rpy9Qp7NAaw"
    },
    {
        "title": "The history of African-American social dance - Camille A. Brown",
        "href": "https://www.youtube.com/watch?v=dpCBMwAweDI"
    },
    {
        "title": "The history of the Cuban Missile Crisis - Matthew A. Jordan",
        "href": "https://www.youtube.com/watch?v=bwWW3sbk4EU"
    },
    {
        "title": "Why are there so many types of apples? - Theresa Doud",
        "href": "https://www.youtube.com/watch?v=mQePz62zkqA"
    },
    {
        "title": "How to use rhetoric to get what you want - Camille A. Langston",
        "href": "https://www.youtube.com/watch?v=3klMM9BkW5o"
    },
    {
        "title": "How do contraceptives work? - NWHunter",
        "href": "https://www.youtube.com/watch?v=Zx8zbTMTncs"
    },
    {
        "title": "Aphasia: The disorder that makes you lose your words - Susan Wortman-Jutt",
        "href": "https://www.youtube.com/watch?v=-GsVhbmecJA"
    },
    {
        "title": "What is a vector? - David Huynh",
        "href": "https://www.youtube.com/watch?v=ml4NSzCQobk"
    },
    {
        "title": "How the Band-Aid was invented | Moments of Vision 3 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=98sFkESm0xg"
    },
    {
        "title": "Is graffiti art? Or vandalism? - Kelly Wall",
        "href": "https://www.youtube.com/watch?v=4GNoUYZhrT0"
    },
    {
        "title": "One of the most difficult words to translate... - Krystian Aparta",
        "href": "https://www.youtube.com/watch?v=fNV7CsKI5m8"
    },
    {
        "title": "How the Königsberg bridge problem changed mathematics - Dan Van der Vieren",
        "href": "https://www.youtube.com/watch?v=nZwSo4vfw6c"
    },
    {
        "title": "How smart are orangutans? - Lu Gao",
        "href": "https://www.youtube.com/watch?v=gFzqqaBA9wQ"
    },
    {
        "title": "The paradox of value - Akshita Agarwal",
        "href": "https://www.youtube.com/watch?v=e7S8jWh6AEs"
    },
    {
        "title": "How do animals see in the dark? - Anna Stöckl",
        "href": "https://www.youtube.com/watch?v=t3CjTU7TaNA"
    },
    {
        "title": "Are spotty fruits and vegetables safe to eat? - Elizabeth Brauer",
        "href": "https://www.youtube.com/watch?v=Mn5N60PCAjs"
    },
    {
        "title": "What is the biggest single-celled organism? - Murry Gans",
        "href": "https://www.youtube.com/watch?v=FK9xHry877U"
    },
    {
        "title": "How to visualize one part per million - Kim Preshoff + The TED-Ed Community",
        "href": "https://www.youtube.com/watch?v=aa-m8a-jZ0k"
    },
    {
        "title": "How a single-celled organism almost wiped out life on Earth - Anusuya Willis",
        "href": "https://www.youtube.com/watch?v=dO2xx-aeZ4w"
    },
    {
        "title": "How coffee got quicker | Moments of Vision 2 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=0tQjJSqqZvs"
    },
    {
        "title": "Real life sunken cities - Peter Campbell",
        "href": "https://www.youtube.com/watch?v=b2gtOl7xMmc"
    },
    {
        "title": "Which sunscreen should you choose? - Mary Poffenroth",
        "href": "https://www.youtube.com/watch?v=JX8rv_natkw"
    },
    {
        "title": "Why do we hiccup? - John Cameron",
        "href": "https://www.youtube.com/watch?v=-AdQLkUkui8"
    },
    {
        "title": "Should we be looking for life elsewhere in the universe? - Aomawa Shields",
        "href": "https://www.youtube.com/watch?v=SgLO10cUC1M"
    },
    {
        "title": "Why the metric system matters - Matt Anticole",
        "href": "https://www.youtube.com/watch?v=7bUVjJWA6Vw"
    },
    {
        "title": "How did Hitler rise to power? - Alex Gendler and Anthony Hazard",
        "href": "https://www.youtube.com/watch?v=jFICRFKtAc4"
    },
    {
        "title": "How to turn protest into powerful change - Eric Liu",
        "href": "https://www.youtube.com/watch?v=c_g1BMVFcuw"
    },
    {
        "title": "How the bra was invented | Moments of Vision 1 - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=8PWca6-fvec"
    },
    {
        "title": "Rosalind Franklin: DNA's unsung hero - Cláudio L. Guerra",
        "href": "https://www.youtube.com/watch?v=BIP0lYrdirI"
    },
    {
        "title": "Can you solve the passcode riddle? - Ganesh Pai",
        "href": "https://www.youtube.com/watch?v=7Vd1dTBVbFg"
    },
    {
        "title": "How North America got its shape - Peter J. Haproff",
        "href": "https://www.youtube.com/watch?v=jzqnUvE66HA"
    },
    {
        "title": "What is obesity? - Mia Nacamulli",
        "href": "https://www.youtube.com/watch?v=-vNVG7XJpVE"
    },
    {
        "title": "How playing sports benefits your body ... and your brain - Leah Lagos and Jaspal Ricky Singh",
        "href": "https://www.youtube.com/watch?v=hmFQqjMF_f0"
    },
    {
        "title": "What is epigenetics? - Carlos Guerrero-Bosagna",
        "href": "https://www.youtube.com/watch?v=_aAhcNjmvhc"
    },
    {
        "title": "Is there a disease that makes us love cats? - Jaap de Roode",
        "href": "https://www.youtube.com/watch?v=rqno7K2zXi4"
    },
    {
        "title": "How the food you eat affects your brain - Mia Nacamulli",
        "href": "https://www.youtube.com/watch?v=xyQY8a-ng6g"
    },
    {
        "title": "What makes something \"Kafkaesque\"? - Noah Tavlin",
        "href": "https://www.youtube.com/watch?v=wkPR4Rcf4ww"
    },
    {
        "title": "What does it mean to be a refugee? - Benedetta Berti and Evelien Borgman",
        "href": "https://www.youtube.com/watch?v=25bwiSikRsI"
    },
    {
        "title": "Why wasn’t the Bill of Rights originally in the US Constitution? - James Coll",
        "href": "https://www.youtube.com/watch?v=aMCDikASE4o"
    },
    {
        "title": "The evolution of the book - Julie Dreyfuss",
        "href": "https://www.youtube.com/watch?v=_YqYtdPUis4"
    },
    {
        "title": "Why do our bodies age? - Monica Menesini",
        "href": "https://www.youtube.com/watch?v=GASaqPv0t0g"
    },
    {
        "title": "How interpreters juggle two languages at once - Ewandro Magalhaes",
        "href": "https://www.youtube.com/watch?v=cXNTArhA0Jg"
    },
    {
        "title": "How transistors work - Gokul J. Krishnan",
        "href": "https://www.youtube.com/watch?v=WhNyURBiJcU"
    },
    {
        "title": "The pleasure of poetic pattern - David Silverstein",
        "href": "https://www.youtube.com/watch?v=URuMb15CWJs"
    },
    {
        "title": "Can you solve the control room riddle? - Dennis Shasha",
        "href": "https://www.youtube.com/watch?v=3mbdiky5dLw"
    },
    {
        "title": "Why do people have seasonal allergies? - Eleanor Nelsen",
        "href": "https://www.youtube.com/watch?v=-q7Fz7NIMWM"
    },
    {
        "title": "The otherworldly creatures in the ocean's deepest depths - Lidia Lins",
        "href": "https://www.youtube.com/watch?v=U69LIr0OrNc"
    },
    {
        "title": "Making sense of irrational numbers - Ganesh Pai",
        "href": "https://www.youtube.com/watch?v=sbGjr_awePE"
    },
    {
        "title": "The origin of countless conspiracy theories - PatrickJMT",
        "href": "https://www.youtube.com/watch?v=88_C-fogY40"
    },
    {
        "title": "The microbial jungles all over the place (and you) - Scott Chimileski and Roberto Kolter",
        "href": "https://www.youtube.com/watch?v=pHLP5CZMnL4"
    },
    {
        "title": "Why is the US Constitution so hard to amend? - Peter Paccone",
        "href": "https://www.youtube.com/watch?v=FwREAW4SlVY"
    },
    {
        "title": "The psychology behind irrational decisions - Sara Garofalo",
        "href": "https://www.youtube.com/watch?v=V2EMuoM5IX4"
    },
    {
        "title": "How computer memory works - Kanawat Senanan",
        "href": "https://www.youtube.com/watch?v=p3q5zWCw8J4"
    },
    {
        "title": "How do we separate the seemingly inseparable? - Iddo Magen",
        "href": "https://www.youtube.com/watch?v=q8Ent5CXhfY"
    },
    {
        "title": "Who IS Sherlock Holmes - Neil McCaw",
        "href": "https://www.youtube.com/watch?v=I8992A5oAWM"
    },
    {
        "title": "The threat of invasive species - Jennifer Klos",
        "href": "https://www.youtube.com/watch?v=spTWwqVP_2s"
    },
    {
        "title": "Can plants talk to each other? - Richard Karban",
        "href": "https://www.youtube.com/watch?v=xOXSqy05EO0"
    },
    {
        "title": "What is abstract expressionism? - Sarah Rosenthal",
        "href": "https://www.youtube.com/watch?v=oG9jQBj1eqE"
    },
    {
        "title": "Why do cats act so weird? - Tony Buffington",
        "href": "https://www.youtube.com/watch?v=sI8NsYIyQ2A"
    },
    {
        "title": "The Turing test: Can a computer pass for a human? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=3wLqsRLvV-c"
    },
    {
        "title": "Why is being scared so fun? - Margee Kerr",
        "href": "https://www.youtube.com/watch?v=oetVvR5RQUs"
    },
    {
        "title": "The surprising reason you feel awful when you're sick - Marco A. Sotomayor",
        "href": "https://www.youtube.com/watch?v=gVdY9KXF_Sg"
    },
    {
        "title": "Should you trust unanimous decisions? - Derek Abbott",
        "href": "https://www.youtube.com/watch?v=heCSbA8w57A"
    },
    {
        "title": "Why the insect brain is so incredible - Anna Stöckl",
        "href": "https://www.youtube.com/watch?v=OQw3TNRnJ1I"
    },
    {
        "title": "Does grammar matter? - Andreea S. Calude",
        "href": "https://www.youtube.com/watch?v=Wn_eBrIDUuc"
    },
    {
        "title": "How to spot a fad diet - Mia Nacamulli",
        "href": "https://www.youtube.com/watch?v=8V15Z-yyiVg"
    },
    {
        "title": "Why is Mount Everest so tall? - Michele Koppes",
        "href": "https://www.youtube.com/watch?v=uy9GFAOGGXU"
    },
    {
        "title": "How do glasses help us see? - Andrew Bastawrous and Clare Gilbert",
        "href": "https://www.youtube.com/watch?v=ypF037wlYZg"
    },
    {
        "title": "The power of the placebo effect - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=z03FQGlGgo0"
    },
    {
        "title": "How do schools of fish swim in harmony? - Nathan S. Jacobs",
        "href": "https://www.youtube.com/watch?v=dkP8NUwB2io"
    },
    {
        "title": "What would happen if you didn’t drink water? - Mia Nacamulli",
        "href": "https://www.youtube.com/watch?v=9iMGFqMmUFs"
    },
    {
        "title": "Can you solve the locker riddle? - Lisa Winer",
        "href": "https://www.youtube.com/watch?v=c18GjbnZXMw"
    },
    {
        "title": "The invisible motion of still objects - Ran Tivony",
        "href": "https://www.youtube.com/watch?v=b0IbXG0hnOk"
    },
    {
        "title": "The physics of the \"hardest move\" in ballet - Arleen Sugano",
        "href": "https://www.youtube.com/watch?v=l5VgOdgptRg"
    },
    {
        "title": "The poet who painted with his words - Geneviève Emy",
        "href": "https://www.youtube.com/watch?v=YJ0x1YOuMwQ"
    },
    {
        "title": "What is metallic glass? - Ashwini Bharathula",
        "href": "https://www.youtube.com/watch?v=oULkYytYPgs"
    },
    {
        "title": "5 tips to improve your critical thinking - Samantha Agoos",
        "href": "https://www.youtube.com/watch?v=dItUGF8GdTw"
    },
    {
        "title": "Is radiation dangerous? - Matt Anticole",
        "href": "https://www.youtube.com/watch?v=zI2vRwFKnHQ"
    },
    {
        "title": "Why is this painting so captivating? - James Earle and Christina Bozsik",
        "href": "https://www.youtube.com/watch?v=loMy3sbW64g"
    },
    {
        "title": "This is Sparta: Fierce warriors of the ancient world - Craig Zimmer",
        "href": "https://www.youtube.com/watch?v=M7V1a1I5BL0"
    },
    {
        "title": "The origins of ballet - Jennifer Tortorello and Adrienne Westwood",
        "href": "https://www.youtube.com/watch?v=OEekFTj5PvU"
    },
    {
        "title": "Can wildlife adapt to climate change? - Erin Eastwood",
        "href": "https://www.youtube.com/watch?v=ZCKRjP_DMII"
    },
    {
        "title": "Why are there so many insects? - Murry Gans",
        "href": "https://www.youtube.com/watch?v=2ivZ6GSaK1M"
    },
    {
        "title": "Can you solve the frog riddle? - Derek Abbott",
        "href": "https://www.youtube.com/watch?v=cpwSGsb-rTs"
    },
    {
        "title": "How ancient art influenced modern art - Felipe Galindo",
        "href": "https://www.youtube.com/watch?v=V9RrO0dtu5M"
    },
    {
        "title": "The psychology of narcissism - W. Keith Campbell",
        "href": "https://www.youtube.com/watch?v=arJLy3hX1E8"
    },
    {
        "title": "How miscommunication happens (and how to avoid it) - Katherine Hampsten",
        "href": "https://www.youtube.com/watch?v=gCfzeONu3Mo"
    },
    {
        "title": "The controversial origins of the Encyclopedia - Addison Anderson",
        "href": "https://www.youtube.com/watch?v=jv4bWkoG4k8"
    },
    {
        "title": "The science of skin color - Angela Koine Flynn",
        "href": "https://www.youtube.com/watch?v=_r4c2NT4naQ"
    },
    {
        "title": "Why do we love? A philosophical inquiry - Skye C. Cleary",
        "href": "https://www.youtube.com/watch?v=yJSiUm6jvI0&t=8s"
    },
    {
        "title": "How to make your writing funnier - Cheri Steinkellner",
        "href": "https://www.youtube.com/watch?v=zNTxSBgDNp4"
    },
    {
        "title": "The immortal cells of Henrietta Lacks - Robin Bulleri",
        "href": "https://www.youtube.com/watch?v=22lGbAVWhro"
    },
    {
        "title": "History vs. Napoleon Bonaparte - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=8aq_gRfmjgY"
    },
    {
        "title": "Why certain naturally occurring wildfires are necessary - Jim Schulz",
        "href": "https://www.youtube.com/watch?v=cNVZEVq3KzY"
    },
    {
        "title": "Can you solve the temple riddle? - Dennis E. Shasha",
        "href": "https://www.youtube.com/watch?v=nSbvlktToSY"
    },
    {
        "title": "The most lightning-struck place on Earth - Graeme Anderson",
        "href": "https://www.youtube.com/watch?v=doy2BsHc-44"
    },
    {
        "title": "How science fiction can help predict the future - Roey Tzezana",
        "href": "https://www.youtube.com/watch?v=paXKoZ1pr5w"
    },
    {
        "title": "Why are human bodies asymmetrical? - Leo Q. Wan",
        "href": "https://www.youtube.com/watch?v=hLgh1pJP5ng"
    },
    {
        "title": "When will the next mass extinction occur? - Borths, D'Emic, and Pritchard",
        "href": "https://www.youtube.com/watch?v=RAdNCIIYXvo"
    },
    {
        "title": "The beneficial bacteria that make delicious food - Erez Garty",
        "href": "https://www.youtube.com/watch?v=eksagPy5tmQ"
    },
    {
        "title": "How statistics can be misleading - Mark Liddell",
        "href": "https://www.youtube.com/watch?v=sxYrzzy3cq8"
    },
    {
        "title": "How menstruation works - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=ayzN5f3qN8g"
    },
    {
        "title": "How do carbohydrates impact your health? - Richard J. Wood",
        "href": "https://www.youtube.com/watch?v=wxzc_2c6GMg"
    },
    {
        "title": "The surprising (and invisible) signatures of sea creatures - Kakani Katija",
        "href": "https://www.youtube.com/watch?v=s0yJwZGxvBA"
    },
    {
        "title": "How do solar panels work? - Richard Komp",
        "href": "https://www.youtube.com/watch?v=xKxrkht7CpY"
    },
    {
        "title": "How do we know what color dinosaurs were? - Len Bloch",
        "href": "https://www.youtube.com/watch?v=qYijAZWdnBk"
    },
    {
        "title": "The science of snowflakes - Maruša Bradač",
        "href": "https://www.youtube.com/watch?v=FwGH4gulLX4"
    },
    {
        "title": "The Sun’s surprising movement across the sky - Gordon Williamson",
        "href": "https://www.youtube.com/watch?v=Xm13Kq_E1ik"
    },
    {
        "title": "Forget shopping. Soon you'll download your new clothes - Danit Peleg",
        "href": "https://www.youtube.com/watch?v=Fkjr7XT95Jo"
    },
    {
        "title": "What is depression? - Helen M. Farrell",
        "href": "https://www.youtube.com/watch?v=z-IR48Mb3W0"
    },
    {
        "title": "History through the eyes of the potato - Leo Bear-McGuinness",
        "href": "https://www.youtube.com/watch?v=xROmDsULcLE"
    },
    {
        "title": "Why do we dream? - Amy Adkins",
        "href": "https://www.youtube.com/watch?v=2W85Dwxx218"
    },
    {
        "title": "The ethical dilemma of self-driving cars - Patrick Lin",
        "href": "https://www.youtube.com/watch?v=ixIoDYVfKA0"
    },
    {
        "title": "How does anesthesia work? - Steven Zheng",
        "href": "https://www.youtube.com/watch?v=B_tTymvDWXk"
    },
    {
        "title": "Why the octopus brain is so extraordinary - Cláudio L. Guerra",
        "href": "https://www.youtube.com/watch?v=VLkKiVIBxXU"
    },
    {
        "title": "How exposing anonymous companies could cut down on crime - Global Witness",
        "href": "https://www.youtube.com/watch?v=FyOVMqAIFw8"
    },
    {
        "title": "Can you solve \"Einstein’s Riddle\"? - Dan Van der Vieren",
        "href": "https://www.youtube.com/watch?v=1rDVz_Fb6HQ"
    },
    {
        "title": "How did clouds get their names? - Richard Hamblyn",
        "href": "https://www.youtube.com/watch?v=UuW1jhxCgx0"
    },
    {
        "title": "Let's make history…by recording it - StoryCorps & TED Prize",
        "href": "https://www.youtube.com/watch?v=mCh6j2E8xLY"
    },
    {
        "title": "What’s the difference between a scientific law and theory? - Matt Anticole",
        "href": "https://www.youtube.com/watch?v=GyN2RhbhiEU"
    },
    {
        "title": "Would you opt for a life with no pain? - Hayley Levitt and Bethany Rickwald",
        "href": "https://www.youtube.com/watch?v=XNP1x11Z2Ig"
    },
    {
        "title": "How to write descriptively - Nalo Hopkinson",
        "href": "https://www.youtube.com/watch?v=RSoRzTtwgP4"
    },
    {
        "title": "What would happen if you didn’t sleep? - Claudia Aguirre",
        "href": "https://www.youtube.com/watch?v=dqONk48l5vY"
    },
    {
        "title": "The science behind the myth: Homer's \"Odyssey\" - Matt Kaplan",
        "href": "https://www.youtube.com/watch?v=CVo225pUaSA"
    },
    {
        "title": "How stress affects your brain - Madhumita Murgia",
        "href": "https://www.youtube.com/watch?v=WuyPuH9ojCE"
    },
    {
        "title": "How mucus keeps us healthy - Katharina Ribbeck",
        "href": "https://www.youtube.com/watch?v=WW4skW6gucU"
    },
    {
        "title": "What makes muscles grow? - Jeffrey Siegel",
        "href": "https://www.youtube.com/watch?v=2tM1LFFxeKg"
    },
    {
        "title": "Group theory 101: How to play a Rubik’s Cube like a piano - Michael Staff",
        "href": "https://www.youtube.com/watch?v=FW2Hvs5WaRY"
    },
    {
        "title": "How do hard drives work? - Kanawat Senanan",
        "href": "https://www.youtube.com/watch?v=wteUW2sL7bc"
    },
    {
        "title": "Who was Confucius? - Bryan W. Van Norden",
        "href": "https://www.youtube.com/watch?v=wFt_VGG0kJU"
    },
    {
        "title": "How computers translate human language - Ioannis Papachimonas",
        "href": "https://www.youtube.com/watch?v=X4BmV2t83SM"
    },
    {
        "title": "How stress affects your body - Sharon Horesh Bergquist",
        "href": "https://www.youtube.com/watch?v=v-t1Z5-oPtU"
    },
    {
        "title": "How a few scientists transformed the way we think about disease - Tien Nguyen",
        "href": "https://www.youtube.com/watch?v=N9LC-3ZKiok"
    },
    {
        "title": "Why do women have periods?",
        "href": "https://www.youtube.com/watch?v=cjbgZwgdY7Q"
    },
    {
        "title": "What are the universal human rights? - Benedetta Berti",
        "href": "https://www.youtube.com/watch?v=nDgIVseTkuE"
    },
    {
        "title": "Where did Russia come from? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=lfe1wEQzSzM"
    },
    {
        "title": "The race to sequence the human genome - Tien Nguyen",
        "href": "https://www.youtube.com/watch?v=AhsIF-cmoQQ"
    },
    {
        "title": "Where does gold come from? - David Lunney",
        "href": "https://www.youtube.com/watch?v=jf_4z4AKwJg"
    },
    {
        "title": "3 tips to boost your confidence - TED-Ed",
        "href": "https://www.youtube.com/watch?v=l_NYrWqUR40"
    },
    {
        "title": "Can you solve the prisoner hat riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=N5vJSNXPEwA"
    },
    {
        "title": "What \"Orwellian\" really means - Noah Tavlin",
        "href": "https://www.youtube.com/watch?v=oe64p-QzhNE"
    },
    {
        "title": "The incredible collaboration behind the International Space Station - Tien Nguyen",
        "href": "https://www.youtube.com/watch?v=bJ3oTTm_Pdo"
    },
    {
        "title": "A curable condition that causes blindness - Andrew Bastawrous",
        "href": "https://www.youtube.com/watch?v=pgNXdNDkXoE"
    },
    {
        "title": "How memories form and how we lose them - Catharine Young",
        "href": "https://www.youtube.com/watch?v=yOgAbKJGrTA"
    },
    {
        "title": "The treadmill's dark and twisted past - Conor Heffernan",
        "href": "https://www.youtube.com/watch?v=Al-30Z-aH8M"
    },
    {
        "title": "What happens when your DNA is damaged? - Monica Menesini",
        "href": "https://www.youtube.com/watch?v=vP8-5Bhd2ag"
    },
    {
        "title": "What makes the Great Wall of China so extraordinary - Megan Campisi and Pen-Pen Chen",
        "href": "https://www.youtube.com/watch?v=23oHqNEqRyo"
    },
    {
        "title": "The mathematical secrets of Pascal’s triangle - Wajdi Mohamed Ratemi",
        "href": "https://www.youtube.com/watch?v=XMriWTvPXHI"
    },
    {
        "title": "When to use \"me\", \"myself\" and \"I\" - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=XakoA2D0Okw"
    },
    {
        "title": "Do animals have language? - Michele Bishop",
        "href": "https://www.youtube.com/watch?v=_1FY5kL_zXU"
    },
    {
        "title": "How misused modifiers can hurt your writing - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=-tX34V_XGeQ"
    },
    {
        "title": "The ancient origins of the Olympics - Armand D'Angour",
        "href": "https://www.youtube.com/watch?v=VdHHus8IgYA"
    },
    {
        "title": "Can you solve the bridge riddle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=7yDmGnA8Hw0"
    },
    {
        "title": "How smart are dolphins? - Lori Marino",
        "href": "https://www.youtube.com/watch?v=05PpTqtGhGU"
    },
    {
        "title": "How false news can spread - Noah Tavlin",
        "href": "https://www.youtube.com/watch?v=cSKGa_7XJkg"
    },
    {
        "title": "Why do some people go bald? - Sarthak Sinha",
        "href": "https://www.youtube.com/watch?v=8diYLhl8bWU"
    },
    {
        "title": "Could we actually live on Mars? - Mari Foroutan",
        "href": "https://www.youtube.com/watch?v=DMMPYkRrd4o"
    },
    {
        "title": "A poetic experiment: Walt Whitman, interpreted by three animators - Justin Moore",
        "href": "https://www.youtube.com/watch?v=6jCw8ydqkrg"
    },
    {
        "title": "Bring TED to the classroom with TED-Ed Clubs",
        "href": "https://www.youtube.com/watch?v=ZDq_pWi7dH4"
    },
    {
        "title": "What happens when continents collide? - Juan D. Carrillo",
        "href": "https://www.youtube.com/watch?v=PddQvyiBfdc"
    },
    {
        "title": "Buffalo buffalo buffalo: One-word sentences and how they work - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=TWbzjGIec20"
    },
    {
        "title": "The physics of playing guitar - Oscar Fernando Perez",
        "href": "https://www.youtube.com/watch?v=w6EGyFAGpXU"
    },
    {
        "title": "Who am I? A philosophical inquiry - Amy Adkins",
        "href": "https://www.youtube.com/watch?v=UHwVyplU3Pg"
    },
    {
        "title": "How does a jellyfish sting? - Neosha S Kashef",
        "href": "https://www.youtube.com/watch?v=Pu_ijC8HFRU"
    },
    {
        "title": "The benefits of good posture - Murat Dalkilinç",
        "href": "https://www.youtube.com/watch?v=OyK0oE5rwFY"
    },
    {
        "title": "Solid, liquid, gas and … plasma? - Michael Murillo",
        "href": "https://www.youtube.com/watch?v=tJplytSR-ww"
    },
    {
        "title": "When to use apostrophes - Laura McClure",
        "href": "https://www.youtube.com/watch?v=My6oGvkHnfY"
    },
    {
        "title": "How blood pressure works - Wilfred Manzano",
        "href": "https://www.youtube.com/watch?v=Ab9OZsDECZw"
    },
    {
        "title": "The Akune brothers: Siblings on opposite sides of war - Wendell Oshiro",
        "href": "https://www.youtube.com/watch?v=de56W-F93nw"
    },
    {
        "title": "The scientific origins of the Minotaur - Matt Kaplan",
        "href": "https://www.youtube.com/watch?v=2aoIs-5zqoI"
    },
    {
        "title": "Where did English come from? - Claire Bowern",
        "href": "https://www.youtube.com/watch?v=YEaSxhcns7Y"
    },
    {
        "title": "Inside the minds of animals - Bryan B Rasmussen",
        "href": "https://www.youtube.com/watch?v=BDJ8xyQjyhM"
    },
    {
        "title": "What is a calorie? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=VEQaH4LruUo"
    },
    {
        "title": "Why tragedies are alluring - David E. Rivas",
        "href": "https://www.youtube.com/watch?v=eVRU5MVYNiw"
    },
    {
        "title": "How do pregnancy tests work? - Tien Nguyen",
        "href": "https://www.youtube.com/watch?v=aOfWTscU8YM"
    },
    {
        "title": "How to use a semicolon - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=th-zyfvwDdI"
    },
    {
        "title": "History vs. Genghis Khan - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=Eq-Wk3YqeH4"
    },
    {
        "title": "The incredible history of China's terracotta warriors - Megan Campisi and Pen-Pen Chen",
        "href": "https://www.youtube.com/watch?v=mP5p4QbvPtc"
    },
    {
        "title": "Why do blood types matter? - Natalie S. Hodge",
        "href": "https://www.youtube.com/watch?v=xfZhb6lmxjk"
    },
    {
        "title": "How to grow a bone - Nina Tandon",
        "href": "https://www.youtube.com/watch?v=yJoQj5-TIvE"
    },
    {
        "title": "The benefits of a bilingual brain - Mia Nacamulli",
        "href": "https://www.youtube.com/watch?v=MMmOLN5zBLY"
    },
    {
        "title": "How X-rays see through your skin - Ge Wang",
        "href": "https://www.youtube.com/watch?v=gsV7SJDDCY4"
    },
    {
        "title": "How to make a mummy - Len Bloch",
        "href": "https://www.youtube.com/watch?v=9gD0K7oH92U"
    },
    {
        "title": "Can you solve the famously difficult green-eyed logic puzzle? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=98TQv5IAtY8"
    },
    {
        "title": "Football physics: The \"impossible\" free kick - Erez Garty",
        "href": "https://www.youtube.com/watch?v=m57cimnJ7fc"
    },
    {
        "title": "How plants tell time - Dasha Savage",
        "href": "https://www.youtube.com/watch?v=3jIW5wW2WC0"
    },
    {
        "title": "How to detect a supernova - Samantha Kuula",
        "href": "https://www.youtube.com/watch?v=xYxyTZG7APQ"
    },
    {
        "title": "How people rationalize fraud - Kelly Richmond Pope",
        "href": "https://www.youtube.com/watch?v=Tb6QX9Yy1GM"
    },
    {
        "title": "The math behind Michael Jordan’s legendary hang time - Andy Peterson and Zack Patterson",
        "href": "https://www.youtube.com/watch?v=sDbmcPnzwy4"
    },
    {
        "title": "What’s the big deal with gluten? - William D. Chey",
        "href": "https://www.youtube.com/watch?v=uEM2iDT-VAk"
    },
    {
        "title": "The battle of the Greek tragedies - Melanie Sirof",
        "href": "https://www.youtube.com/watch?v=BjLrMxO4cys"
    },
    {
        "title": "Will future spacecraft fit in our pockets? - Dhonam Pemba",
        "href": "https://www.youtube.com/watch?v=Y7IsyjFROHE"
    },
    {
        "title": "How I responded to sexism in gaming with empathy - Lilian Chen",
        "href": "https://www.youtube.com/watch?v=orOa-yRL4NI"
    },
    {
        "title": "How batteries work - Adam Jacobson",
        "href": "https://www.youtube.com/watch?v=9OVtk6G2TnQ"
    },
    {
        "title": "Debunking the myths of OCD - Natascha M. Santos",
        "href": "https://www.youtube.com/watch?v=DhlRgwdDc-E&t=14s"
    },
    {
        "title": "Mansa Musa, one of the wealthiest people who ever lived - Jessica Smith",
        "href": "https://www.youtube.com/watch?v=O3YJMaL55TM"
    },
    {
        "title": "The complex geometry of Islamic design - Eric Broug",
        "href": "https://www.youtube.com/watch?v=pg1NpMmPv48"
    },
    {
        "title": "Sunlight is way older than you think - Sten Odenwald",
        "href": "https://www.youtube.com/watch?v=Z-UO-RZBQ3U"
    },
    {
        "title": "The wars that inspired Game of Thrones - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=VjO55pKuBo4"
    },
    {
        "title": "How in vitro fertilization (IVF) works - Nassim Assefi and Brian A. Levine",
        "href": "https://www.youtube.com/watch?v=P27waC05Hdk"
    },
    {
        "title": "Why do your knuckles pop? - Eleanor Nelsen",
        "href": "https://www.youtube.com/watch?v=IjiKUmfaZr4"
    },
    {
        "title": "What causes economic bubbles? - Prateek Singh",
        "href": "https://www.youtube.com/watch?v=I5ZR0jMlxX0"
    },
    {
        "title": "What is leukemia? - Danilo Allegra and Dania Puggioni",
        "href": "https://www.youtube.com/watch?v=Z3B-AaqjyjE"
    },
    {
        "title": "Why neutrinos matter - Sílvia Bravo Gallart",
        "href": "https://www.youtube.com/watch?v=nkydJXigkRE"
    },
    {
        "title": "Could your brain repair itself? - Ralitsa Petrova",
        "href": "https://www.youtube.com/watch?v=9D1AwQ0lTsg"
    },
    {
        "title": "How to unboil an egg - Eleanor Nelsen",
        "href": "https://www.youtube.com/watch?v=CHMY4G9gTPA"
    },
    {
        "title": "What really happens to the plastic you throw away - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=_6xlNyWPpB8"
    },
    {
        "title": "Why is biodiversity so important? - Kim Preshoff",
        "href": "https://www.youtube.com/watch?v=GK_vRtHJZu4"
    },
    {
        "title": "How to spot a counterfeit bill - Tien Nguyen",
        "href": "https://www.youtube.com/watch?v=sLMc5OFnQRs"
    },
    {
        "title": "Announcing TED-Ed Español",
        "href": "https://www.youtube.com/watch?v=e28XXiuKRtE"
    },
    {
        "title": "What's the difference between accuracy and precision? - Matt Anticole",
        "href": "https://www.youtube.com/watch?v=hRAFPdDppzs"
    },
    {
        "title": "Why are manhole covers round? - Marc Chamberland",
        "href": "https://www.youtube.com/watch?v=wDBb2_I-oC4"
    },
    {
        "title": "The science of static electricity - Anuradha Bhagwat",
        "href": "https://www.youtube.com/watch?v=yc2-363MIQs"
    },
    {
        "title": "How brass instruments work - Al Cannon",
        "href": "https://www.youtube.com/watch?v=IYHfiQ4R7Bs"
    },
    {
        "title": "Eye vs. camera - Michael Mauser",
        "href": "https://www.youtube.com/watch?v=OGqAM2Mykng"
    },
    {
        "title": "The effects of underwater pressure on the body - Neosha S Kashef",
        "href": "https://www.youtube.com/watch?v=_cj8AtODiHc"
    },
    {
        "title": "What causes bad breath? - Mel Rosenberg",
        "href": "https://www.youtube.com/watch?v=oZ13QfP2os8"
    },
    {
        "title": "How do geckos defy gravity? - Eleanor Nelsen",
        "href": "https://www.youtube.com/watch?v=YeSuQm7KfaE"
    },
    {
        "title": "Earworms: Those songs that get stuck in your head - Elizabeth Hellmuth Margulis",
        "href": "https://www.youtube.com/watch?v=3NE_OoO-N54"
    },
    {
        "title": "What did democracy really mean in Athens? - Melissa Schwartzberg",
        "href": "https://www.youtube.com/watch?v=0fivQUlC7-8"
    },
    {
        "title": "Where did Earth’s water come from? - Zachary Metz",
        "href": "https://www.youtube.com/watch?v=RwtO04EXgUE"
    },
    {
        "title": "Can robots be creative? - Gil Weinberg",
        "href": "https://www.youtube.com/watch?v=Rh9vBczqMk0"
    },
    {
        "title": "Plato’s Allegory of the Cave - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=1RWOpQXTltA"
    },
    {
        "title": "Why it’s so hard to cure HIV/AIDS - Janet Iwasa",
        "href": "https://www.youtube.com/watch?v=0TipTogQT3E"
    },
    {
        "title": "The real story behind Archimedes’ Eureka! - Armand D'Angour",
        "href": "https://www.youtube.com/watch?v=0v86Yk14rf8"
    },
    {
        "title": "Learning from smallpox: How to eradicate a disease - Julie Garon and Walter A. Orenstein",
        "href": "https://www.youtube.com/watch?v=oBSandHijDc"
    },
    {
        "title": "How parasites change their host's behavior - Jaap de Roode",
        "href": "https://www.youtube.com/watch?v=g09BQes-B7E"
    },
    {
        "title": "Why sitting is bad for you - Murat Dalkilinç",
        "href": "https://www.youtube.com/watch?v=wUEl8KrMz14"
    },
    {
        "title": "Rhythm in a box: The story of the cajon drum - Paul Jennings",
        "href": "https://www.youtube.com/watch?v=iJRfx0o5648"
    },
    {
        "title": "How does the thyroid manage your metabolism? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=iNrUpBwU3q0"
    },
    {
        "title": "The law of conservation of mass - Todd Ramsey",
        "href": "https://www.youtube.com/watch?v=2S6e11NBwiw"
    },
    {
        "title": "Did Shakespeare write his plays? - Natalya St. Clair and Aaron Williams",
        "href": "https://www.youtube.com/watch?v=K-aAUwAFZlQ"
    },
    {
        "title": "The last banana: A thought experiment in probability - Leonardo Barichello",
        "href": "https://www.youtube.com/watch?v=Kgudt4PXs28"
    },
    {
        "title": "What does the pancreas do? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=8dgoeYPoE-0"
    },
    {
        "title": "How we think complex cells evolved - Adam Jacobson",
        "href": "https://www.youtube.com/watch?v=9i7kAt97XYU"
    },
    {
        "title": "History vs. Richard Nixon - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=MX_HYL6-0Co"
    },
    {
        "title": "The sonic boom problem - Katerina Kaouri",
        "href": "https://www.youtube.com/watch?v=JO4_VHM69oI"
    },
    {
        "title": "How poachers became caretakers - John Kasaona",
        "href": "https://www.youtube.com/watch?v=v2fEILZJKwg"
    },
    {
        "title": "How do your kidneys work? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=FN3MFhYPWWo"
    },
    {
        "title": "Why do we have museums? - J. V. Maranto",
        "href": "https://www.youtube.com/watch?v=MHo928fd2wE"
    },
    {
        "title": "Why are some people left-handed? - Daniel M. Abrams",
        "href": "https://www.youtube.com/watch?v=TGLYcYCm2FM"
    },
    {
        "title": "How do dogs \"see\" with their noses? - Alexandra Horowitz",
        "href": "https://www.youtube.com/watch?v=p7fXa2Occ_U"
    },
    {
        "title": "How does your smartphone know your location? - Wilton L. Virgo",
        "href": "https://www.youtube.com/watch?v=70cDSUI4XKE"
    },
    {
        "title": "Why Shakespeare loved iambic pentameter - David T. Freeman and Gregory Taylor",
        "href": "https://www.youtube.com/watch?v=I5lsuyUNu_4"
    },
    {
        "title": "Why do buildings fall in earthquakes? - Vicki V. May",
        "href": "https://www.youtube.com/watch?v=H4VQul_SmCg"
    },
    {
        "title": "Why the Arctic is climate change's canary in the coal mine - William Chapman",
        "href": "https://www.youtube.com/watch?v=lrEM3LHvjI0"
    },
    {
        "title": "What triggers a chemical reaction? - Kareem Jarrah",
        "href": "https://www.youtube.com/watch?v=8m6RtOpqvtU"
    },
    {
        "title": "Could a blind eye regenerate? - David Davila",
        "href": "https://www.youtube.com/watch?v=gGeLxjgUNG4"
    },
    {
        "title": "How will TED-Ed celebrate its 1,000,000th subscriber?",
        "href": "https://www.youtube.com/watch?v=DSFVf2u4ngY"
    },
    {
        "title": "How spontaneous brain activity keeps you alive - Nathan S. Jacobs",
        "href": "https://www.youtube.com/watch?v=Rbp0co9pCUg"
    },
    {
        "title": "How do vaccines work? - Kelwalin Dhanasarnsombut",
        "href": "https://www.youtube.com/watch?v=rb7TVW77ZCs"
    },
    {
        "title": "The evolution of the human eye - Joshua Harvey",
        "href": "https://www.youtube.com/watch?v=qrKZBh8BL_U"
    },
    {
        "title": "Einstein's miracle year - Larry Lagerstrom",
        "href": "https://www.youtube.com/watch?v=91XI7M9l3no"
    },
    {
        "title": "The benefits of a good night's sleep - Shai Marcu",
        "href": "https://www.youtube.com/watch?v=gedoSfZvBgE"
    },
    {
        "title": "What is a gift economy? - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=EaxjxICgahc"
    },
    {
        "title": "The Atlantic slave trade: What too few textbooks told you - Anthony Hazard",
        "href": "https://www.youtube.com/watch?v=3NXC4Q_4JVg"
    },
    {
        "title": "The great conspiracy against Julius Caesar - Kathryn Tempest",
        "href": "https://www.youtube.com/watch?v=wgPymD-NBQU"
    },
    {
        "title": "The truth about bats - Amy Wray",
        "href": "https://www.youtube.com/watch?v=Z8wLQ3NCBgg"
    },
    {
        "title": "The pharaoh that wouldn't be forgotten - Kate Green",
        "href": "https://www.youtube.com/watch?v=8bYRy_wZEJI"
    },
    {
        "title": "At what moment are you dead? - Randall Hayes",
        "href": "https://www.youtube.com/watch?v=5c6C3rHOdf8"
    },
    {
        "title": "How to create cleaner coal - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=rO6S93FKIUM"
    },
    {
        "title": "The 2,400-year search for the atom - Theresa Doud",
        "href": "https://www.youtube.com/watch?v=xazQRcSCRaY"
    },
    {
        "title": "What we know (and don't know) about Ebola - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=UMMwgvLmN-M"
    },
    {
        "title": "The hidden worlds within natural history museums - Joshua Drew",
        "href": "https://www.youtube.com/watch?v=B-vYGcl_nA8"
    },
    {
        "title": "What are those floaty things in your eye? - Michael Mauser",
        "href": "https://www.youtube.com/watch?v=Y6e_m9iq-4Q"
    },
    {
        "title": "What does the liver do? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=wbh3SjzydnQ"
    },
    {
        "title": "How do lungs work? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=8NUxvJS-_0k"
    },
    {
        "title": "How does cancer spread through the body? - Ivan Seah Yu Jun",
        "href": "https://www.youtube.com/watch?v=OcigJn8UJNQ"
    },
    {
        "title": "The mighty mathematics of the lever - Andy Peterson and Zack Patterson",
        "href": "https://www.youtube.com/watch?v=YlYEi0PgG1g"
    },
    {
        "title": "The great brain debate - Ted Altschuler",
        "href": "https://www.youtube.com/watch?v=pv6QHxkBFzY"
    },
    {
        "title": "Why elephants never forget - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=lSXNqsOoURg"
    },
    {
        "title": "How do scars form? - Sarthak Sinha",
        "href": "https://www.youtube.com/watch?v=ucRMDdw82yw"
    },
    {
        "title": "How a wound heals itself - Sarthak Sinha",
        "href": "https://www.youtube.com/watch?v=TLVwELDMDWs"
    },
    {
        "title": "Ideasthesia: How do ideas feel? - Danko Nikolić",
        "href": "https://www.youtube.com/watch?v=GIF2tssedLI"
    },
    {
        "title": "How to understand power - Eric Liu",
        "href": "https://www.youtube.com/watch?v=c_Eutci7ack"
    },
    {
        "title": "The language of lying — Noah Zandan",
        "href": "https://www.youtube.com/watch?v=H0-WkpmTPrM&t=14s"
    },
    {
        "title": "The unexpected math behind Van Gogh's \"Starry Night\" - Natalya St. Clair",
        "href": "https://www.youtube.com/watch?v=PMerSm2ToFY"
    },
    {
        "title": "Could comets be the source of life on Earth? - Justin Dowd",
        "href": "https://www.youtube.com/watch?v=EnnPJXbKt0U"
    },
    {
        "title": "Is math discovered or invented? - Jeff Dekofsky",
        "href": "https://www.youtube.com/watch?v=X_xR5Kes4Rs"
    },
    {
        "title": "Is our climate headed for a mathematical tipping point? - Victor J. Donnay",
        "href": "https://www.youtube.com/watch?v=EoYSToa2Yfw"
    },
    {
        "title": "How do germs spread (and why do they make us sick)? - Yannay Khaikin and Nicole Mideo",
        "href": "https://www.youtube.com/watch?v=yxonJTWhBJQ"
    },
    {
        "title": "A different way to visualize rhythm - John Varney",
        "href": "https://www.youtube.com/watch?v=2UphAzryVpY"
    },
    {
        "title": "Einstein's brilliant mistake: Entangled states - Chad Orzel",
        "href": "https://www.youtube.com/watch?v=DbbWx2COU0E"
    },
    {
        "title": "Schrödinger's cat: A thought experiment in quantum mechanics - Chad Orzel",
        "href": "https://www.youtube.com/watch?v=UjaAxUO6-Uw"
    },
    {
        "title": "History vs. Christopher Columbus - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=GD3dgiDreGc"
    },
    {
        "title": "Light seconds, light years, light centuries: How to measure extreme distances - Yuan-Sen Ting",
        "href": "https://www.youtube.com/watch?v=Op3AYaJc0Xw"
    },
    {
        "title": "How do we study the stars? - Yuan-Sen Ting",
        "href": "https://www.youtube.com/watch?v=i7930fj3T54"
    },
    {
        "title": "How do vitamins work? - Ginnie Trinh Nguyen",
        "href": "https://www.youtube.com/watch?v=ISZLTJH5lYg"
    },
    {
        "title": "A brief history of melancholy - Courtney Stephens",
        "href": "https://www.youtube.com/watch?v=8li-3pRrA5Y"
    },
    {
        "title": "Is telekinesis real? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=Jq9D_HkQhAA"
    },
    {
        "title": "If matter falls down, does antimatter fall up? - Chloé Malbrunot",
        "href": "https://www.youtube.com/watch?v=46NanUtEIhk"
    },
    {
        "title": "Cloudy climate change: How clouds affect Earth's temperature - Jasper Kirkby",
        "href": "https://www.youtube.com/watch?v=sDo7saKaEys"
    },
    {
        "title": "How cosmic rays help us understand the universe - Veronica Bindi",
        "href": "https://www.youtube.com/watch?v=91801Y1lsCg"
    },
    {
        "title": "Where do genes come from? - Carl Zimmer",
        "href": "https://www.youtube.com/watch?v=z9HIYjRRaDE"
    },
    {
        "title": "The history of tattoos - Addison Anderson",
        "href": "https://www.youtube.com/watch?v=MYn15yDBvxM"
    },
    {
        "title": "What is the Heisenberg Uncertainty Principle? - Chad Orzel",
        "href": "https://www.youtube.com/watch?v=TQKELOE9eY4"
    },
    {
        "title": "Particles and waves: The central mystery of quantum mechanics - Chad Orzel",
        "href": "https://www.youtube.com/watch?v=Hk3fgjHNQ2Q"
    },
    {
        "title": "The chemistry of cold packs - John Pollard",
        "href": "https://www.youtube.com/watch?v=hVh-bpAv4_E"
    },
    {
        "title": "Making a TED-Ed Lesson: Bringing a pop-up book to life",
        "href": "https://www.youtube.com/watch?v=RZR_b753ZJ0"
    },
    {
        "title": "Why do we pass gas? - Purna Kashyap",
        "href": "https://www.youtube.com/watch?v=GTvnjaUU6Xk"
    },
    {
        "title": "Corruption, wealth and beauty: The history of the Venetian gondola - Laura Morelli",
        "href": "https://www.youtube.com/watch?v=B5x5CnwQZD4"
    },
    {
        "title": "Why we love repetition in music - Elizabeth Hellmuth Margulis",
        "href": "https://www.youtube.com/watch?v=1lo8EomDrwA"
    },
    {
        "title": "What did dogs teach humans about diabetes? - Duncan C. Ferguson",
        "href": "https://www.youtube.com/watch?v=k_3hbrqLZ5U"
    },
    {
        "title": "What happens when you remove the hippocampus? - Sam Kean",
        "href": "https://www.youtube.com/watch?v=KkaXNvzE4pk"
    },
    {
        "title": "Feedback loops: How nature gets its rhythms - Anje-Margriet Neutel",
        "href": "https://www.youtube.com/watch?v=inVZoI1AkC8"
    },
    {
        "title": "What can Schrödinger's cat teach us about quantum mechanics? - Josh Samani",
        "href": "https://www.youtube.com/watch?v=z1GCnycbMeA"
    },
    {
        "title": "How do tornadoes form? - James Spann",
        "href": "https://www.youtube.com/watch?v=lmWh9jV_1ac"
    },
    {
        "title": "The past, present and future of the bubonic plague - Sharon N. DeWitte",
        "href": "https://www.youtube.com/watch?v=ySClB6-OH-Q"
    },
    {
        "title": "How do you know you exist? - James Zucker",
        "href": "https://www.youtube.com/watch?v=LmxlcJFTaYU"
    },
    {
        "title": "How optical illusions trick your brain - Nathan S. Jacobs",
        "href": "https://www.youtube.com/watch?v=rfdJyDfIHIc"
    },
    {
        "title": "The secret lives of baby fish - Amy McDermott",
        "href": "https://www.youtube.com/watch?v=iCM6CawGBRk"
    },
    {
        "title": "What causes antibiotic resistance? - Kevin Wu",
        "href": "https://www.youtube.com/watch?v=znnp-Ivj2ek"
    },
    {
        "title": "What's hidden among the tallest trees on Earth? - Wendell Oshiro",
        "href": "https://www.youtube.com/watch?v=KMudRLPZidg"
    },
    {
        "title": "The nurdles' quest for ocean domination - Kim Preshoff",
        "href": "https://www.youtube.com/watch?v=KpVpJsDjWj8"
    },
    {
        "title": "What light can teach us about the universe - Pete Edwards",
        "href": "https://www.youtube.com/watch?v=HZ7hwUduMoU"
    },
    {
        "title": "The coelacanth: A living fossil of a fish - Erin Eastwood",
        "href": "https://www.youtube.com/watch?v=ujKL1pUHDfo"
    },
    {
        "title": "The history of the barometer (and how it works) - Asaf Bar-Yosef",
        "href": "https://www.youtube.com/watch?v=EkDhlzA-lwI"
    },
    {
        "title": "Under the hood: The chemistry of cars - Cynthia Chubbuck",
        "href": "https://www.youtube.com/watch?v=e9vfMrjitXw"
    },
    {
        "title": "How playing an instrument benefits your brain - Anita Collins",
        "href": "https://www.youtube.com/watch?v=R0JKCYZ8hng"
    },
    {
        "title": "What happens when you get heat stroke? - Douglas J. Casa",
        "href": "https://www.youtube.com/watch?v=PpHM4DfPZQU"
    },
    {
        "title": "How quantum mechanics explains global warming - Lieven Scheire",
        "href": "https://www.youtube.com/watch?v=-EJOO3xAjTk"
    },
    {
        "title": "The many meanings of Michelangelo's Statue of David - James Earle",
        "href": "https://www.youtube.com/watch?v=o9Kum_Jijdk"
    },
    {
        "title": "It's a church. It's a mosque. It's Hagia Sophia. - Kelly Wall",
        "href": "https://www.youtube.com/watch?v=KRPp3jzv1Tw"
    },
    {
        "title": "What makes tattoos permanent? - Claudia Aguirre",
        "href": "https://www.youtube.com/watch?v=DMuBif1mJz0"
    },
    {
        "title": "Inside the ant colony - Deborah M. Gordon",
        "href": "https://www.youtube.com/watch?v=vG-QZOTc5_Q"
    },
    {
        "title": "How heavy is air? - Dan Quinn",
        "href": "https://www.youtube.com/watch?v=VDf00z8sMFw"
    },
    {
        "title": "The time value of money - German Nande",
        "href": "https://www.youtube.com/watch?v=MhvjCWfy-lw"
    },
    {
        "title": "What you might not know about the Declaration of Independence - Kenneth C. Davis",
        "href": "https://www.youtube.com/watch?v=LKJMWHCUoiw"
    },
    {
        "title": "A guide to the energy of the Earth - Joshua M. Sneideman",
        "href": "https://www.youtube.com/watch?v=fHztd6k5ZXY"
    },
    {
        "title": "How to speak monkey: The language of cotton-top tamarins - Anne Savage",
        "href": "https://www.youtube.com/watch?v=4Vfn5CV9juI"
    },
    {
        "title": "Attack of the killer algae - Eric Noel Muñoz",
        "href": "https://www.youtube.com/watch?v=Vd4rgN6MYtg"
    },
    {
        "title": "What gives a dollar bill its value? - Doug Levinson",
        "href": "https://www.youtube.com/watch?v=XNu5ppFZbHo"
    },
    {
        "title": "Why aren't we only using solar power? - Alexandros George Charalambides",
        "href": "https://www.youtube.com/watch?v=k8d5Pf7VIiU"
    },
    {
        "title": "How bees help plants have sex - Fernanda S. Valdovinos",
        "href": "https://www.youtube.com/watch?v=Y5uRVv7GGQM"
    },
    {
        "title": "A brief history of religion in art - TED-Ed",
        "href": "https://www.youtube.com/watch?v=qfITRYcnP84"
    },
    {
        "title": "Tycho Brahe, the scandalous astronomer - Dan Wenkel",
        "href": "https://www.youtube.com/watch?v=7QDvKzY4aqA"
    },
    {
        "title": "Why do honeybees love hexagons? - Zack Patterson and Andy Peterson",
        "href": "https://www.youtube.com/watch?v=QEzlsjAqADA"
    },
    {
        "title": "The colossal consequences of supervolcanoes - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=hDNlu7Qf6_E"
    },
    {
        "title": "How to choose your news - Damon Brown",
        "href": "https://www.youtube.com/watch?v=q-Y-z6HmRgI"
    },
    {
        "title": "The Silk Road: Connecting the ancient world through trade - Shannon Harris Castelo",
        "href": "https://www.youtube.com/watch?v=vn3e37VWc0k"
    },
    {
        "title": "How does your brain respond to pain? - Karen D. Davis",
        "href": "https://www.youtube.com/watch?v=I7wfDenj6CQ"
    },
    {
        "title": "How languages evolve - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=iWDKsHm6gTA"
    },
    {
        "title": "A digital reimagining of Gettysburg - Anne Knowles",
        "href": "https://www.youtube.com/watch?v=f4pkzHP3qyA"
    },
    {
        "title": "The fundamentals of space-time: Part 3 - Andrew Pontzen and Tom Whyntie",
        "href": "https://www.youtube.com/watch?v=NAXHHBUY9_E"
    },
    {
        "title": "How the heart actually pumps blood - Edmond Hui",
        "href": "https://www.youtube.com/watch?v=ruM4Xxhx32U"
    },
    {
        "title": "The cancer gene we all have - Michael Windelspecht",
        "href": "https://www.youtube.com/watch?v=pOyKFgGKmHE"
    },
    {
        "title": "From Aaliyah to Jay-Z: Captured moments in hip-hop history - Jonathan Mannion",
        "href": "https://www.youtube.com/watch?v=FXzQAMrQNrM"
    },
    {
        "title": "The science of symmetry - Colm Kelleher",
        "href": "https://www.youtube.com/watch?v=3drtbPZF9yc"
    },
    {
        "title": "What is the world wide web? - Twila Camp",
        "href": "https://www.youtube.com/watch?v=J8hzJxb0rpc"
    },
    {
        "title": "The science of attraction - Dawn Maslar",
        "href": "https://www.youtube.com/watch?v=169N81xAffQ"
    },
    {
        "title": "The sweaty teacher's lament - Justin Lamb",
        "href": "https://www.youtube.com/watch?v=Fwu_2hVC9kE"
    },
    {
        "title": "Population pyramids: Powerful predictors of the future - Kim Preshoff",
        "href": "https://www.youtube.com/watch?v=RLmKfXwWQtE"
    },
    {
        "title": "The fundamentals of space-time: Part 2 - Andrew Pontzen and Tom Whyntie",
        "href": "https://www.youtube.com/watch?v=aeCsS6PjhK8"
    },
    {
        "title": "The case of the missing fractals - Alex Rosenthal and George Zaidan",
        "href": "https://www.youtube.com/watch?v=0C75vRVL5lE"
    },
    {
        "title": "Not all scientific studies are created equal - David H. Schwartz",
        "href": "https://www.youtube.com/watch?v=GUpd2HJHUt8"
    },
    {
        "title": "Lessons from Auschwitz: The power of our words - Benjamin Zander",
        "href": "https://www.youtube.com/watch?v=aBc2kw8aHRM"
    },
    {
        "title": "How tsunamis work - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=Wx9vPv-T51I"
    },
    {
        "title": "Climate change: Earth's giant game of Tetris - Joss Fong",
        "href": "https://www.youtube.com/watch?v=ztWHqUFJRTs"
    },
    {
        "title": "How to track a tornado - Karen Kosiba",
        "href": "https://www.youtube.com/watch?v=qhbX_BPrJwU"
    },
    {
        "title": "Cell vs. virus: A battle for health - Shannon Stiles",
        "href": "https://www.youtube.com/watch?v=oqGuJhOeMek"
    },
    {
        "title": "The family structure of elephants - Caitlin O'Connell-Rodwell",
        "href": "https://www.youtube.com/watch?v=VXHRtoH0kIQ"
    },
    {
        "title": "The networked beauty of forests - Suzanne Simard",
        "href": "https://www.youtube.com/watch?v=dRSPy3ZwpBk"
    },
    {
        "title": "How whales breathe, communicate ... and fart with their faces - Joy Reidenberg",
        "href": "https://www.youtube.com/watch?v=2dnaEcUKeAQ"
    },
    {
        "title": "Can we eat to starve cancer? - William Li",
        "href": "https://www.youtube.com/watch?v=OjkzfeJz66o"
    },
    {
        "title": "Why is ketchup so hard to pour? - George Zaidan",
        "href": "https://www.youtube.com/watch?v=KB43fM_ozKQ"
    },
    {
        "title": "History vs. Vladimir Lenin - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=9N8hsXQapjY"
    },
    {
        "title": "What is Alzheimer's disease? - Ivan Seah Yu Jun",
        "href": "https://www.youtube.com/watch?v=yJXTXN4xrI8"
    },
    {
        "title": "Nature's smallest factory: The Calvin cycle - Cathy Symington",
        "href": "https://www.youtube.com/watch?v=0UzMaoaXKaM"
    },
    {
        "title": "Sugar: Hiding in plain sight - Robert Lustig",
        "href": "https://www.youtube.com/watch?v=Q4CZ81EmAsw"
    },
    {
        "title": "How many ways can you arrange a deck of cards? - Yannay Khaikin",
        "href": "https://www.youtube.com/watch?v=uNS1QvDzCVw"
    },
    {
        "title": "Pixar: The math behind the movies - Tony DeRose",
        "href": "https://www.youtube.com/watch?v=_IZMVMf4NQ0"
    },
    {
        "title": "The fundamentals of space-time: Part 1 - Andrew Pontzen and Tom Whyntie",
        "href": "https://www.youtube.com/watch?v=ScdLqAA_64E"
    },
    {
        "title": "Dead stuff: The secret ingredient in our food chain - John C. Moore",
        "href": "https://www.youtube.com/watch?v=KI7u_pcfAQE"
    },
    {
        "title": "The case of the vanishing honeybees - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=oz1Cz8ko8iY"
    },
    {
        "title": "Grammar's great divide: The Oxford comma - TED-Ed",
        "href": "https://www.youtube.com/watch?v=ptM7FzyjtRk"
    },
    {
        "title": "From the top of the food chain down: Rewilding our world - George Monbiot",
        "href": "https://www.youtube.com/watch?v=t3I9gDocYdk"
    },
    {
        "title": "The science of spiciness - Rose Eveleth",
        "href": "https://www.youtube.com/watch?v=qD0_yWgifDM"
    },
    {
        "title": "Is there a difference between art and craft? - Laura Morelli",
        "href": "https://www.youtube.com/watch?v=tVdw60eCnJI"
    },
    {
        "title": "Making waves: The power of concentration gradients - Sasha Wright",
        "href": "https://www.youtube.com/watch?v=5xtgtJTC2go"
    },
    {
        "title": "Getting started as a DJ: Mixing, mashups and digital turntables - Cole Plante",
        "href": "https://www.youtube.com/watch?v=nthpwCMrhQw"
    },
    {
        "title": "What we can learn from galaxies far, far away - Henry Lin",
        "href": "https://www.youtube.com/watch?v=kpzEsgSBUqc"
    },
    {
        "title": "Why do we cry? The three types of tears - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=keMF8YzQoRM"
    },
    {
        "title": "What is the universe made of? - Dennis Wildfogel",
        "href": "https://www.youtube.com/watch?v=CBZH4dMac-Q"
    },
    {
        "title": "Poison vs. venom: What's the difference? - Rose Eveleth",
        "href": "https://www.youtube.com/watch?v=KnJ4_xRfxpA"
    },
    {
        "title": "An athlete uses physics to shatter world records - Asaf Bar-Yosef",
        "href": "https://www.youtube.com/watch?v=RaGUW1d0w8g"
    },
    {
        "title": "The history of marriage - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=ZZZ6QB5TSfk"
    },
    {
        "title": "How one piece of legislation divided a nation - Ben Labaree, Jr.",
        "href": "https://www.youtube.com/watch?v=oWww0YIf-JE"
    },
    {
        "title": "Eli the eel: A mysterious migration - James Prosek",
        "href": "https://www.youtube.com/watch?v=BR1enXROmgA"
    },
    {
        "title": "How one teenager unearthed baseball's untold history - Cam Perron",
        "href": "https://www.youtube.com/watch?v=Jbum8SGuAKg"
    },
    {
        "title": "Why is glass transparent? - Mark Miodownik",
        "href": "https://www.youtube.com/watch?v=VwRLIt6jgdM"
    },
    {
        "title": "The Pangaea Pop-up - Michael Molina",
        "href": "https://www.youtube.com/watch?v=p-vNSqUy0l4"
    },
    {
        "title": "What percentage of your brain do you use? - Richard E. Cytowic",
        "href": "https://www.youtube.com/watch?v=5NubJ2ThK_U"
    },
    {
        "title": "Want to be an activist? Start with your toys - McKenna Pope",
        "href": "https://www.youtube.com/watch?v=cTK_cJVryIc"
    },
    {
        "title": "Animation basics: The art of timing and spacing - TED-Ed",
        "href": "https://www.youtube.com/watch?v=KRVhtMxQWRs"
    },
    {
        "title": "How fast are you moving right now? - Tucker Hiatt",
        "href": "https://www.youtube.com/watch?v=wIzvfki5ozU"
    },
    {
        "title": "Biodiesel: The afterlife of oil - Natascia Radice",
        "href": "https://www.youtube.com/watch?v=CBKKoq_HxYA"
    },
    {
        "title": "History vs. Andrew Jackson - James Fester",
        "href": "https://www.youtube.com/watch?v=gx5IyumKmDI"
    },
    {
        "title": "The Infinite Hotel Paradox - Jeff Dekofsky",
        "href": "https://www.youtube.com/watch?v=Uj3_KqkI9Zo"
    },
    {
        "title": "Start a TED-Ed Club today!",
        "href": "https://www.youtube.com/watch?v=Qj_OzmP8iWg"
    },
    {
        "title": "The mystery of motion sickness - Rose Eveleth",
        "href": "https://www.youtube.com/watch?v=gKhE3CMz7Sk"
    },
    {
        "title": "How to build a fictional world - Kate Messner",
        "href": "https://www.youtube.com/watch?v=ZQTQSbjecLg"
    },
    {
        "title": "How sugar affects the brain - Nicole Avena",
        "href": "https://www.youtube.com/watch?v=lEXBxijQREo&t=80s"
    },
    {
        "title": "How to fossilize...yourself - Phoebe A. Cohen",
        "href": "https://www.youtube.com/watch?v=yDIQzUSezmA"
    },
    {
        "title": "Should we eat bugs? - Emma Bryce",
        "href": "https://www.youtube.com/watch?v=rDqXwUS402I"
    },
    {
        "title": "How do we smell? - Rose Eveleth",
        "href": "https://www.youtube.com/watch?v=snJnO6OpjCs"
    },
    {
        "title": "The popularity, plight and poop of penguins - Dyan deNapoli",
        "href": "https://www.youtube.com/watch?v=kGhknFzrnXg"
    },
    {
        "title": "The true story of 'true' - Gina Cooke",
        "href": "https://www.youtube.com/watch?v=VYFE3tYUdJU"
    },
    {
        "title": "The death of the universe - Renée Hlozek",
        "href": "https://www.youtube.com/watch?v=mSzCS_5qtVY"
    },
    {
        "title": "A father-daughter dance ... in prison - Angela Patton",
        "href": "https://www.youtube.com/watch?v=eRhL-XLcM9M"
    },
    {
        "title": "Deep sea diving ... in a wheelchair - Sue Austin",
        "href": "https://www.youtube.com/watch?v=-OzZBU0UIIU"
    },
    {
        "title": "The beautiful nano details of our world - Gary Greenberg",
        "href": "https://www.youtube.com/watch?v=gWUZ8t6mJRY"
    },
    {
        "title": "A child of the state - Lemn Sissay",
        "href": "https://www.youtube.com/watch?v=sb2FI2EI4D8"
    },
    {
        "title": "My glacier cave discoveries - Eddy Cartaya",
        "href": "https://www.youtube.com/watch?v=tH94iV3Jy_Q"
    },
    {
        "title": "From DNA to Silly Putty, the diverse world of polymers - Jan Mattingly",
        "href": "https://www.youtube.com/watch?v=UwRVj9rz2QQ"
    },
    {
        "title": "How to sequence the human genome - Mark J. Kiel",
        "href": "https://www.youtube.com/watch?v=MvuYATh7Y74"
    },
    {
        "title": "What makes us feel good about our work? - Dan Ariely",
        "href": "https://www.youtube.com/watch?v=c8iswsLT3Jc"
    },
    {
        "title": "Mysteries of vernacular: Odd - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=VWbu2Kh1S6Q"
    },
    {
        "title": "Agile programming -- for your family - Bruce Feiler",
        "href": "https://www.youtube.com/watch?v=xyFG-LuIj_M"
    },
    {
        "title": "Could your language affect your ability to save money? - Keith Chen",
        "href": "https://www.youtube.com/watch?v=iUJuYDPXjus"
    },
    {
        "title": "Learn to read Chinese ... with ease! - ShaoLan",
        "href": "https://www.youtube.com/watch?v=qR72RnEwl0M"
    },
    {
        "title": "Music and creativity in Ancient Greece - Tim Hansen",
        "href": "https://www.youtube.com/watch?v=-1aAunaw1GA"
    },
    {
        "title": "The loathsome, lethal mosquito - Rose Eveleth",
        "href": "https://www.youtube.com/watch?v=IkmjCmvfeFI"
    },
    {
        "title": "Mysteries of vernacular: Yankee - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=8b6_3Yn1OEU"
    },
    {
        "title": "Making a TED-Ed Lesson: Visualizing big ideas",
        "href": "https://www.youtube.com/watch?v=P50NcJLSJJY"
    },
    {
        "title": "Mysteries of vernacular: Lady - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=KZGNyXaVirM"
    },
    {
        "title": "The chemistry of cookies - Stephanie Warren",
        "href": "https://www.youtube.com/watch?v=n6wpNhyreDE"
    },
    {
        "title": "The chemical reaction that feeds the world - Daniel D. Dulek",
        "href": "https://www.youtube.com/watch?v=o1_D4FscMnU"
    },
    {
        "title": "The five major world religions - John Bellaimey",
        "href": "https://www.youtube.com/watch?v=m6dCxo7t_aE&t=33s"
    },
    {
        "title": "Where does energy come from? - George Zaidan and Charles Morton",
        "href": "https://www.youtube.com/watch?v=dmcevC55K3s"
    },
    {
        "title": "The operating system of life - George Zaidan and Charles Morton",
        "href": "https://www.youtube.com/watch?v=JufLDxmCwB0"
    },
    {
        "title": "Why is yawning contagious? - Claudia Aguirre",
        "href": "https://www.youtube.com/watch?v=4NpG4F9yq00"
    },
    {
        "title": "The fight for the right to vote in the United States - Nicki Beaman Griffin",
        "href": "https://www.youtube.com/watch?v=P9VdyPbbzlI"
    },
    {
        "title": "The deadly irony of gunpowder - Eric Rosado",
        "href": "https://www.youtube.com/watch?v=mqHVRgCkCDE"
    },
    {
        "title": "Mysteries of vernacular: Robot - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=zXnlMckRiyE"
    },
    {
        "title": "Vampires: Folklore, fantasy and fact - Michael Molina",
        "href": "https://www.youtube.com/watch?v=_0ThKRmySoU"
    },
    {
        "title": "How we conquered the deadly smallpox virus - Simona Zompi",
        "href": "https://www.youtube.com/watch?v=yqUFy-t4MlQ"
    },
    {
        "title": "The strengths and weaknesses of acids and bases - George Zaidan and Charles Morton",
        "href": "https://www.youtube.com/watch?v=DupXDD87oHc"
    },
    {
        "title": "Why does ice float in water? - George Zaidan and Charles Morton",
        "href": "https://www.youtube.com/watch?v=UukRgqzk-KE"
    },
    {
        "title": "Is time travel possible? - Colin Stuart",
        "href": "https://www.youtube.com/watch?v=7H3ksmxwpWc"
    },
    {
        "title": "Mysteries of vernacular: Ukulele - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=r6BDcTPTAu0"
    },
    {
        "title": "What is the shape of a molecule? - George Zaidan and Charles Morton",
        "href": "https://www.youtube.com/watch?v=Jq_Ca-HKh1g"
    },
    {
        "title": "How atoms bond - George Zaidan and Charles Morton",
        "href": "https://www.youtube.com/watch?v=NgD9yHSJ29I"
    },
    {
        "title": "The uncertain location of electrons - George Zaidan and Charles Morton",
        "href": "https://www.youtube.com/watch?v=8ROHpZ0A70I"
    },
    {
        "title": "Why don't oil and water mix? - John Pollard",
        "href": "https://www.youtube.com/watch?v=h5yIJXdItgo"
    },
    {
        "title": "The science of stage fright (and how to overcome it) - Mikael Cho",
        "href": "https://www.youtube.com/watch?v=K93fMnFKwfI"
    },
    {
        "title": "Why extremophiles bode well for life beyond Earth - Louisa Preston",
        "href": "https://www.youtube.com/watch?v=Bsp5JYNMAQE"
    },
    {
        "title": "How art can help you analyze - Amy E. Herman",
        "href": "https://www.youtube.com/watch?v=ubEadhXWwV4"
    },
    {
        "title": "Speech acts: Constative and performative - Colleen Glenney Boggs",
        "href": "https://www.youtube.com/watch?v=LgmpbXIGpcc"
    },
    {
        "title": "The most groundbreaking scientist you've never heard of - Addison Anderson",
        "href": "https://www.youtube.com/watch?v=If4I3aF1PRg"
    },
    {
        "title": "Kabuki: The people's dramatic art - Amanda Mattes",
        "href": "https://www.youtube.com/watch?v=oidE2SSDczw"
    },
    {
        "title": "Are Elvish, Klingon, Dothraki and Na'vi real languages? - John McWhorter",
        "href": "https://www.youtube.com/watch?v=a5mZ0R3h8m0"
    },
    {
        "title": "Birth of a nickname - John McWhorter",
        "href": "https://www.youtube.com/watch?v=KA7mpOvTgs8"
    },
    {
        "title": "Human sperm vs. the sperm whale - Aatish Bhatia",
        "href": "https://www.youtube.com/watch?v=U9g4gRWkFTs"
    },
    {
        "title": "Light waves, visible and invisible - Lucianne Walkowicz",
        "href": "https://www.youtube.com/watch?v=O0PawPSdk28"
    },
    {
        "title": "Bird migration, a perilous journey - Alyssa Klavans",
        "href": "https://www.youtube.com/watch?v=Q-mMMpl_T80"
    },
    {
        "title": "Why are frogs disappearing? - Kerry M. Kriger",
        "href": "https://www.youtube.com/watch?v=NvP6j4Dj0VA"
    },
    {
        "title": "Natural pest control ... using bugs! - Shimon Steinberg",
        "href": "https://www.youtube.com/watch?v=xi-D8y-6uA4"
    },
    {
        "title": "America's native prisoners of war - Aaron Huey",
        "href": "https://www.youtube.com/watch?v=MS6ARB2CgLI"
    },
    {
        "title": "Urbanization and the future of cities - Vance Kite",
        "href": "https://www.youtube.com/watch?v=fKnAJCSGSdk"
    },
    {
        "title": "What are stem cells? - Craig A. Kohn",
        "href": "https://www.youtube.com/watch?v=evH0I7Coc54"
    },
    {
        "title": "What is love? - Brad Troeger",
        "href": "https://www.youtube.com/watch?v=5sY4rhvB9LE"
    },
    {
        "title": "The true power of the performing arts - Ben Cameron",
        "href": "https://www.youtube.com/watch?v=pbIas5MAQn0"
    },
    {
        "title": "The game layer on top of the world - Seth Priebatsch",
        "href": "https://www.youtube.com/watch?v=-n3buCOXiY8"
    },
    {
        "title": "A trip through space to calculate distance - Heather Tunnell",
        "href": "https://www.youtube.com/watch?v=edD3nwNcxcA"
    },
    {
        "title": "Cicadas: The dormant army beneath your feet - Rose Eveleth",
        "href": "https://www.youtube.com/watch?v=8iaoEkpnvVk"
    },
    {
        "title": "The moon illusion - Andrew Vanden Heuvel",
        "href": "https://www.youtube.com/watch?v=RXkYjL_7jME"
    },
    {
        "title": "The neurons that shaped civilization - VS Ramachandran",
        "href": "https://www.youtube.com/watch?v=l80zgw07W4Y"
    },
    {
        "title": "The beautiful tricks of flowers - Jonathan Drori",
        "href": "https://www.youtube.com/watch?v=25GOatovFIM"
    },
    {
        "title": "Your online life, permanent as a tattoo - Juan Enriquez",
        "href": "https://www.youtube.com/watch?v=pRXmEPZNkpY"
    },
    {
        "title": "The key to growth? Race with the machines - Erik Brynjolfsson",
        "href": "https://www.youtube.com/watch?v=lsdgdgJb3IM"
    },
    {
        "title": "Txtng is killing language. JK!!! - John McWhorter",
        "href": "https://www.youtube.com/watch?v=VrQLDT_1Q_k"
    },
    {
        "title": "The art of asking - Amanda Palmer",
        "href": "https://www.youtube.com/watch?v=3xHURCCswAY"
    },
    {
        "title": "A clean energy proposal -- race to the top! - Jennifer Granholm",
        "href": "https://www.youtube.com/watch?v=XuNgH74BpG0"
    },
    {
        "title": "How we found the giant squid - Edith Widder",
        "href": "https://www.youtube.com/watch?v=0Wb5obt7QO0"
    },
    {
        "title": "We need better drugs -- now - Francis Collins",
        "href": "https://www.youtube.com/watch?v=dSFZJk6qCcc"
    },
    {
        "title": "Why do Americans and Canadians celebrate Labor Day? -Kenneth C. Davis",
        "href": "https://www.youtube.com/watch?v=YqmPE2HtkyU"
    },
    {
        "title": "Are droids taking our jobs? - Andrew McAfee",
        "href": "https://www.youtube.com/watch?v=7EzGs0AtJVw"
    },
    {
        "title": "Demand a fair trade cell phone - Bandi Mbubi",
        "href": "https://www.youtube.com/watch?v=FVENysRzu3E"
    },
    {
        "title": "Design for people, not awards - Timothy Prestero",
        "href": "https://www.youtube.com/watch?v=gtjy1zZrwhA"
    },
    {
        "title": "How to step up in the face of disaster - Caitria + Morgan O'Neill",
        "href": "https://www.youtube.com/watch?v=vveGnERb9uM"
    },
    {
        "title": "A teacher growing green in the South Bronx - Stephen Ritz",
        "href": "https://www.youtube.com/watch?v=mZC-kzM_E4o"
    },
    {
        "title": "The future race car -- 150mph, and no driver - Chris Gerdes",
        "href": "https://www.youtube.com/watch?v=qW0M5m4p9YY"
    },
    {
        "title": "What's your 200-year plan? - Raghava KK",
        "href": "https://www.youtube.com/watch?v=XAjalGXoLOA"
    },
    {
        "title": "Four ways to understand the Earth's age - Joshua M. Sneideman",
        "href": "https://www.youtube.com/watch?v=tkxWmh-tFGs"
    },
    {
        "title": "Reinventing the encyclopedia game - Rives",
        "href": "https://www.youtube.com/watch?v=z_rrcpN9Hoc"
    },
    {
        "title": "What is déjà vu? What is déjà vu? - Michael Molina",
        "href": "https://www.youtube.com/watch?v=foVMwJtlR5s"
    },
    {
        "title": "The Higgs Field, explained - Don Lincoln",
        "href": "https://www.youtube.com/watch?v=joTKd5j3mzk"
    },
    {
        "title": "Gravity and the human body - Jay Buckey",
        "href": "https://www.youtube.com/watch?v=7CuYx9mZCQA"
    },
    {
        "title": "The 3 A's of awesome - Neil Pasricha",
        "href": "https://www.youtube.com/watch?v=DWDbxcvmsHk"
    },
    {
        "title": "On reading the Koran - Lesley Hazleton",
        "href": "https://www.youtube.com/watch?v=xOnwG_GgAqg"
    },
    {
        "title": "True success - John Wooden",
        "href": "https://www.youtube.com/watch?v=3s_hlvhwmvg"
    },
    {
        "title": "How to use experts—and when not to - Noreena Hertz",
        "href": "https://www.youtube.com/watch?v=jLqLG-01Thw"
    },
    {
        "title": "The art of choosing - Sheena Iyengar",
        "href": "https://www.youtube.com/watch?v=h3Tp_nscwjM"
    },
    {
        "title": "Where is home? - Pico Iyer",
        "href": "https://www.youtube.com/watch?v=86HB9uQ2ZS4"
    },
    {
        "title": "Meet global corruption's hidden players - Charmian Gooch",
        "href": "https://www.youtube.com/watch?v=gE9KAJ8ui3A"
    },
    {
        "title": "A Saudi woman who dared to drive - Manal al-Sharif",
        "href": "https://www.youtube.com/watch?v=aZ47h37CGE0"
    },
    {
        "title": "Is the obesity crisis hiding a bigger problem? - Peter Attia",
        "href": "https://www.youtube.com/watch?v=sjJrXHWLP_M"
    },
    {
        "title": "The emergence of \"4D printing\" - Skylar Tibbits",
        "href": "https://www.youtube.com/watch?v=9EW5JuKw588"
    },
    {
        "title": "We the People, and the Republic we must reclaim - Lawrence Lessig",
        "href": "https://www.youtube.com/watch?v=BWeoeqXPOqQ"
    },
    {
        "title": "A mini robot -- powered by your phone - Keller Rinaudo",
        "href": "https://www.youtube.com/watch?v=ayMn1T3nQUQ"
    },
    {
        "title": "The good news on poverty (Yes, there's good news) - Bono",
        "href": "https://www.youtube.com/watch?v=Pe2unbv2rRA"
    },
    {
        "title": "Mysteries of vernacular: Bewilder - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=dxLLAe-k1W4"
    },
    {
        "title": "Shakespearean dating tips - Anthony John Peters",
        "href": "https://www.youtube.com/watch?v=ZNMwhaSHK9Q"
    },
    {
        "title": "The other inconvenient truth - Jonathan Foley",
        "href": "https://www.youtube.com/watch?v=Igwitg9zFvQ"
    },
    {
        "title": "Older people are happier - Laura Carstensen",
        "href": "https://www.youtube.com/watch?v=CAdJcnrSgR8"
    },
    {
        "title": "How to buy happiness - Michael Norton",
        "href": "https://www.youtube.com/watch?v=Rqj7besaGg4"
    },
    {
        "title": "How to use a paper towel - Joe Smith",
        "href": "https://www.youtube.com/watch?v=KnU1Pioy13s"
    },
    {
        "title": "Gaming for understanding - Brenda Brathwaite",
        "href": "https://www.youtube.com/watch?v=lH83NyjoXbU"
    },
    {
        "title": "Perspective is everything - Rory Sutherland",
        "href": "https://www.youtube.com/watch?v=uXKilrFGd2U"
    },
    {
        "title": "A teen just trying to figure it out - Tavi Gevinson",
        "href": "https://www.youtube.com/watch?v=1TS6YW7rzIo"
    },
    {
        "title": "Religions and babies - Hans Rosling",
        "href": "https://www.youtube.com/watch?v=hbrfZD0cnjY"
    },
    {
        "title": "What your designs say about you - Sebastian Deterding",
        "href": "https://www.youtube.com/watch?v=7mcuWJJK2YQ"
    },
    {
        "title": "ET is (probably) out there -- get ready - Seth Shostak",
        "href": "https://www.youtube.com/watch?v=t0m8WdR1FcQ"
    },
    {
        "title": "Will our kids be a different species? - Juan Enriquez",
        "href": "https://www.youtube.com/watch?v=bWWPs35lTjE"
    },
    {
        "title": "The myth of the gay agenda - LZ Granderson",
        "href": "https://www.youtube.com/watch?v=UFaa6CnXMdg"
    },
    {
        "title": "Pop an ollie and innovate! - Rodney Mullen",
        "href": "https://www.youtube.com/watch?v=5zeGl5Jz03o"
    },
    {
        "title": "Women should represent women in media - Megan Kamerick",
        "href": "https://www.youtube.com/watch?v=IaBJFSAxVgY"
    },
    {
        "title": "Lessons from death row inmates - David R. Dow",
        "href": "https://www.youtube.com/watch?v=lleIWB8KalU"
    },
    {
        "title": "Tour the solar system from home - Jon Nguyen",
        "href": "https://www.youtube.com/watch?v=UtNHCwmWYhY"
    },
    {
        "title": "India's invisible innovation - Nirmalya Kumar",
        "href": "https://www.youtube.com/watch?v=zodVSlOuShc"
    },
    {
        "title": "Overcoming obstacles - Steven Claunch",
        "href": "https://www.youtube.com/watch?v=2MGMvEnoD6U"
    },
    {
        "title": "Defining cyberwarfare...in hopes of preventing it - Daniel Garrie",
        "href": "https://www.youtube.com/watch?v=ZVoDwtyvDJc"
    },
    {
        "title": "The Arctic vs. the Antarctic - Camille Seaman",
        "href": "https://www.youtube.com/watch?v=Z5VRoGTF60s"
    },
    {
        "title": "How to learn? From mistakes - Diana Laufenberg",
        "href": "https://www.youtube.com/watch?v=syEOMOIGK0Q"
    },
    {
        "title": "The walk from \"no\" to \"yes\" - William Ury",
        "href": "https://www.youtube.com/watch?v=t-Gj-wBCClY"
    },
    {
        "title": "Navigating Our Global Future - Ian Goldin",
        "href": "https://www.youtube.com/watch?v=kec8L642Y0I"
    },
    {
        "title": "Time-lapse proof of extreme ice loss - James Balog",
        "href": "https://www.youtube.com/watch?v=yTDdY1UG7ug"
    },
    {
        "title": "Symmetry, reality's riddle - Marcus du Sautoy",
        "href": "https://www.youtube.com/watch?v=1xlAaBrIxMs"
    },
    {
        "title": "On being a woman and a diplomat - Madeleine Albright",
        "href": "https://www.youtube.com/watch?v=7wzceILi774"
    },
    {
        "title": "A short intro to the Studio School - Geoff Mulgan",
        "href": "https://www.youtube.com/watch?v=xl30RwACSq8"
    },
    {
        "title": "A doctor's touch - Abraham Verghese",
        "href": "https://www.youtube.com/watch?v=uoWp52mfUjg"
    },
    {
        "title": "Fighting a contagious cancer - Elizabeth Murchison",
        "href": "https://www.youtube.com/watch?v=uWWFXpldgMQ"
    },
    {
        "title": "Hire the hackers! - Misha Glenny",
        "href": "https://www.youtube.com/watch?v=hecdjLbm5_g"
    },
    {
        "title": "Our failing schools. Enough is enough! - Geoffrey Canada",
        "href": "https://www.youtube.com/watch?v=mABIBvhsgQ4"
    },
    {
        "title": "Teachers need real feedback - Bill Gates",
        "href": "https://www.youtube.com/watch?v=dCMbGlqzHE0"
    },
    {
        "title": "Cloudy with a chance of joy - Gavin Pretor-Pinney",
        "href": "https://www.youtube.com/watch?v=xcxGNyex3aE"
    },
    {
        "title": "The voice of the natural world - Bernie Krause",
        "href": "https://www.youtube.com/watch?v=G0My5NfboxM"
    },
    {
        "title": "Michael Green: Why we should build wooden skyscrapers",
        "href": "https://www.youtube.com/watch?v=K5cvHHUnpKo"
    },
    {
        "title": "Sex needs a new metaphor. Here's one ... - Al Vernacchio",
        "href": "https://www.youtube.com/watch?v=FeqPCWrw-t4"
    },
    {
        "title": "What's wrong with our food system - Birke Baehr",
        "href": "https://www.youtube.com/watch?v=TUmdC3C2B4w"
    },
    {
        "title": "Protecting the brain against concussion - Kim Gorgens",
        "href": "https://www.youtube.com/watch?v=1Wmjeu0YqPk"
    },
    {
        "title": "The science of macaroni salad: What's in a molecule? - Josh Kurz",
        "href": "https://www.youtube.com/watch?v=4WR0_gEEZ9I"
    },
    {
        "title": "Why you will fail to have a great career - Larry Smith",
        "href": "https://www.youtube.com/watch?v=gDkJ-ry6aSk"
    },
    {
        "title": "My immigration story - Tan Le",
        "href": "https://www.youtube.com/watch?v=ILZir52FssA"
    },
    {
        "title": "An unexpected place of healing - Ramona Pierson",
        "href": "https://www.youtube.com/watch?v=hueCKLP-hOg"
    },
    {
        "title": "My friend Richard Feynman - Leonard Susskind",
        "href": "https://www.youtube.com/watch?v=5t7DnKa1KVU"
    },
    {
        "title": "Using nature to grow batteries - Angela Belcher",
        "href": "https://www.youtube.com/watch?v=VdkV8nyqpNs"
    },
    {
        "title": "A radical experiment in empathy - Sam Richards",
        "href": "https://www.youtube.com/watch?v=ysqFHuICt0w"
    },
    {
        "title": "A whistleblower you haven't heard - Geert Chatrou",
        "href": "https://www.youtube.com/watch?v=x4fgPHvsP2I"
    },
    {
        "title": "Gaming to re-engage boys in learning - Ali Carr-Chellman",
        "href": "https://www.youtube.com/watch?v=A3ZC9OyHWO4"
    },
    {
        "title": "What nonprofits can learn from Coca-Cola - Melinda French Gates",
        "href": "https://www.youtube.com/watch?v=Xv4I-Amo5Bw"
    },
    {
        "title": "My seven species of robot - Dennis Hong",
        "href": "https://www.youtube.com/watch?v=VyMaqh2ELR0"
    },
    {
        "title": "The economic case for preschool - Timothy Bartik",
        "href": "https://www.youtube.com/watch?v=P1pD6zi-lbU"
    },
    {
        "title": "Crowdsource your health - Lucien Engelen",
        "href": "https://www.youtube.com/watch?v=Y8I7YiZ68jE"
    },
    {
        "title": "What you don't know about marriage - Jenna McCarthy",
        "href": "https://www.youtube.com/watch?v=gN-U_hHtPL4"
    },
    {
        "title": "Everyday leadership - Drew Dudley",
        "href": "https://www.youtube.com/watch?v=uAy6EawKKME"
    },
    {
        "title": "Shape-shifting dinosaurs - Jack Horner",
        "href": "https://www.youtube.com/watch?v=WqkFIIoa_V8"
    },
    {
        "title": "Women entrepreneurs, example not exception - Gayle Tzemach Lemmon",
        "href": "https://www.youtube.com/watch?v=rTBfuoysQYQ"
    },
    {
        "title": "1000 TEDTalks, 6 words - Sebastian Wernicke",
        "href": "https://www.youtube.com/watch?v=e5pklFtGthY"
    },
    {
        "title": "Life's third act - Jane Fonda",
        "href": "https://www.youtube.com/watch?v=E7yePfnLKCU"
    },
    {
        "title": "There are no scraps of men - Alberto Cairo",
        "href": "https://www.youtube.com/watch?v=kwgjaW3Bx18"
    },
    {
        "title": "How to topple a dictator - Srdja Popovic",
        "href": "https://www.youtube.com/watch?v=5uj_mzEqFRk"
    },
    {
        "title": "It's time to question bio-engineering - Paul Root Wolpe",
        "href": "https://www.youtube.com/watch?v=k2NQ2SFuSN4"
    },
    {
        "title": "Should you trust your first impression? - Peter Mende-Siedlecki",
        "href": "https://www.youtube.com/watch?v=eK0NzsGRceg"
    },
    {
        "title": "Who won the space race?  - Jeff Steers",
        "href": "https://www.youtube.com/watch?v=FxpC-8f--xo"
    },
    {
        "title": "A brief history of video games (Part I) - Safwat Saleem",
        "href": "https://www.youtube.com/watch?v=x24KoVNliMk"
    },
    {
        "title": "RNAi: Slicing, dicing and serving your cells - Alex Dainis",
        "href": "https://www.youtube.com/watch?v=tzlGU5EI9rU"
    },
    {
        "title": "The good news of the decade? - Hans Rosling",
        "href": "https://www.youtube.com/watch?v=xVBNT7phYsg"
    },
    {
        "title": "Taking imagination seriously - Janet Echelman",
        "href": "https://www.youtube.com/watch?v=10dkp-N0iwU"
    },
    {
        "title": "Inside an Antarctic time machine - Lee Hotz",
        "href": "https://www.youtube.com/watch?v=miY2D_g3aZk"
    },
    {
        "title": "A warm embrace that saves lives - Jane Chen",
        "href": "https://www.youtube.com/watch?v=lL3qzjKkirs"
    },
    {
        "title": "String theory - Brian Greene",
        "href": "https://www.youtube.com/watch?v=kF4ju6j6aLE"
    },
    {
        "title": "The science behind a climate headline - Rachel Pike",
        "href": "https://www.youtube.com/watch?v=jtRv4qouBEo"
    },
    {
        "title": "What we learn before we're born - Annie Murphy Paul",
        "href": "https://www.youtube.com/watch?v=N-E1msIJ9Hw"
    },
    {
        "title": "How to stop torture - Karen Tse",
        "href": "https://www.youtube.com/watch?v=5NWKsEbc3XU"
    },
    {
        "title": "Experiments that hint of longer lives - Cynthia Kenyon",
        "href": "https://www.youtube.com/watch?v=rdrY3Z7c-Ps"
    },
    {
        "title": "A map of the brain - Allan Jones",
        "href": "https://www.youtube.com/watch?v=69K5rjy_euo"
    },
    {
        "title": "Ancient wonders captured in 3D - Ben Kacyra",
        "href": "https://www.youtube.com/watch?v=TFe6Vsrh1QE"
    },
    {
        "title": "The real reason for brains - Daniel Wolpert",
        "href": "https://www.youtube.com/watch?v=_DdU4ehCzUM"
    },
    {
        "title": "A plane you can drive - Anna Mracek Dietrich",
        "href": "https://www.youtube.com/watch?v=JAeIeYLlvTU"
    },
    {
        "title": "Trust, morality -- and oxytocin? - Paul Zak",
        "href": "https://www.youtube.com/watch?v=UdkueC7KzkM"
    },
    {
        "title": "How economic inequality harms societies - Richard Wilkinson",
        "href": "https://www.youtube.com/watch?v=Ndh58GGCTQo"
    },
    {
        "title": "A prosthetic arm that \"feels\" - Todd Kuiken",
        "href": "https://www.youtube.com/watch?v=FVmPPVNlvxE"
    },
    {
        "title": "Freeing energy from the grid - Justin Hall-Tipping",
        "href": "https://www.youtube.com/watch?v=6IxcsokEGx0"
    },
    {
        "title": "Learning from a barefoot movement - Bunker Roy",
        "href": "https://www.youtube.com/watch?v=irY8WHObovM"
    },
    {
        "title": "How to spot a liar - Pamela Meyer",
        "href": "https://www.youtube.com/watch?v=eZ4zlkhdcCw"
    },
    {
        "title": "The day I turned down Tim Berners-Lee - Ian Ritchie",
        "href": "https://www.youtube.com/watch?v=EnMQQH1-itg"
    },
    {
        "title": "What do babies think? - Alison Gopnik",
        "href": "https://www.youtube.com/watch?v=B6n_xSP1fxA"
    },
    {
        "title": "Trusting the ensemble - Charles Hazlewood",
        "href": "https://www.youtube.com/watch?v=jeGjmVX0d50"
    },
    {
        "title": "We can recycle plastic - Mike Biddle",
        "href": "https://www.youtube.com/watch?v=DbnaWoEHiMM"
    },
    {
        "title": "The generation that's remaking China - Yang Lan",
        "href": "https://www.youtube.com/watch?v=WJoSHQvniDY"
    },
    {
        "title": "Battling bad science - Ben Goldacre",
        "href": "https://www.youtube.com/watch?v=ch9dLgYxD_0"
    },
    {
        "title": "Filming democracy in Ghana - Jarreth Merz",
        "href": "https://www.youtube.com/watch?v=yKVlFTewDE4"
    },
    {
        "title": "Mysteries of vernacular: Keister - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=FBOD4QTYa0k"
    },
    {
        "title": "Massive-scale online collaboration - Luis von Ahn",
        "href": "https://www.youtube.com/watch?v=p5v7h4wQDPg"
    },
    {
        "title": "How to defend Earth from asteroids - Phil Plait",
        "href": "https://www.youtube.com/watch?v=GpI3_Y9My4w"
    },
    {
        "title": "The shared experience of absurdity - Charlie Todd",
        "href": "https://www.youtube.com/watch?v=ewWIDwRMVJw"
    },
    {
        "title": "How cyberattacks threaten real-world peace - Guy-Philippe Goldstein",
        "href": "https://www.youtube.com/watch?v=_ParhjlvHbg"
    },
    {
        "title": "Finding life we can't imagine - Christoph Adami",
        "href": "https://www.youtube.com/watch?v=p89ZirjNPMQ"
    },
    {
        "title": "A civil response to violence - Emiliano Salinas",
        "href": "https://www.youtube.com/watch?v=kktr4ssaC_Y"
    },
    {
        "title": "We need a \"moral operating system\" - Damon Horowitz",
        "href": "https://www.youtube.com/watch?v=1aVGf4G72IA"
    },
    {
        "title": "Faith versus tradition in Islam - Mustafa Akyol",
        "href": "https://www.youtube.com/watch?v=3L31XDIbIFI"
    },
    {
        "title": "Distant time and the hint of a multiverse - Sean Carroll",
        "href": "https://www.youtube.com/watch?v=E3FTvL6A1gQ"
    },
    {
        "title": "A lab the size of a postage stamp - George Whitesides",
        "href": "https://www.youtube.com/watch?v=g6GaWlQGbfQ"
    },
    {
        "title": "How to make work-life balance work - Nigel Marsh",
        "href": "https://www.youtube.com/watch?v=_GgrKjsLrZg"
    },
    {
        "title": "Are we born to run? - Christopher McDougall",
        "href": "https://www.youtube.com/watch?v=jB7xaaV8Rus"
    },
    {
        "title": "The economic injustice of plastic - Van Jones",
        "href": "https://www.youtube.com/watch?v=W1UGzaG1Uos"
    },
    {
        "title": "Why do we have to wear sunscreen? - Kevin P. Boyd",
        "href": "https://www.youtube.com/watch?v=ZSJITdsTze0"
    },
    {
        "title": "Mysteries of vernacular: X-ray - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=liMQHQxkSYA"
    },
    {
        "title": "The hidden meanings of yin and yang - John Bellaimey",
        "href": "https://www.youtube.com/watch?v=ezmR9Attpyc"
    },
    {
        "title": "Obesity + Hunger = 1 global food issue - Ellen Gustafson",
        "href": "https://www.youtube.com/watch?v=SXwYyb0AzmA"
    },
    {
        "title": "Let's raise kids to be entrepreneurs - Cameron Herold",
        "href": "https://www.youtube.com/watch?v=s9e6b-csA1Y"
    },
    {
        "title": "Re-examining the remix - Lawrence Lessig",
        "href": "https://www.youtube.com/watch?v=X8ULxxgjBuI"
    },
    {
        "title": "Lessons from fashion's free culture - Johanna Blakley",
        "href": "https://www.youtube.com/watch?v=gLUzgWAEGjY"
    },
    {
        "title": "Math class needs a makeover -  Dan Meyer",
        "href": "https://www.youtube.com/watch?v=qocAoN4jNwc"
    },
    {
        "title": "Why we need to go back to Mars - Joel Levine",
        "href": "https://www.youtube.com/watch?v=7a8Y605PEc8"
    },
    {
        "title": "How I taught rats to sniff out land mines - Bart Weetjens",
        "href": "https://www.youtube.com/watch?v=nEm5zR1IND0"
    },
    {
        "title": "Mysteries of vernacular: Zero - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=rkZrzmVZnCA"
    },
    {
        "title": "The science of macaroni salad: What's in a mixture? - Josh Kurz",
        "href": "https://www.youtube.com/watch?v=Vt7lN4QPU0k"
    },
    {
        "title": "What's the definition of comedy? Banana. - Addison Anderson",
        "href": "https://www.youtube.com/watch?v=s7ilIYMqjJA"
    },
    {
        "title": "How to take a great picture - Carolina Molinari",
        "href": "https://www.youtube.com/watch?v=-6Doq-mdx6w"
    },
    {
        "title": "The shape-shifting future of the mobile phone - Fabian Hemmert",
        "href": "https://www.youtube.com/watch?v=zJQsXxbZEiI"
    },
    {
        "title": "Greening the ghetto - Majora Carter",
        "href": "https://www.youtube.com/watch?v=q2TewSL_Egk"
    },
    {
        "title": "Atheism 2.0 - Alain de Botton",
        "href": "https://www.youtube.com/watch?v=RBFHVOLhxOk"
    },
    {
        "title": "Meet the Water Canary - Sonaar Luthra",
        "href": "https://www.youtube.com/watch?v=c3KEiiDys_8"
    },
    {
        "title": "How healthy living nearly killed me - A.J. Jacobs",
        "href": "https://www.youtube.com/watch?v=I4Ou5otqjqE"
    },
    {
        "title": "A prosthetic eye to treat blindness - Sheila Nirenberg",
        "href": "https://www.youtube.com/watch?v=RR08NcoBlms"
    },
    {
        "title": "Put a value on nature! - Pavan Sukhdev",
        "href": "https://www.youtube.com/watch?v=gMem9QalY-o"
    },
    {
        "title": "Praising slowness - Carl Honore",
        "href": "https://www.youtube.com/watch?v=npRXazR1LtU"
    },
    {
        "title": "How I discovered DNA - James Watson",
        "href": "https://www.youtube.com/watch?v=RvdxGDJogtA"
    },
    {
        "title": "Mysteries of vernacular: Sarcophagus - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=s0-iSrj6pNU"
    },
    {
        "title": "3 stories of local eco-entrepreneurship - Majora Carter",
        "href": "https://www.youtube.com/watch?v=z4SWD5NHO18"
    },
    {
        "title": "How to expose the corrupt - Peter Eigen",
        "href": "https://www.youtube.com/watch?v=aRRE5TEnfsA"
    },
    {
        "title": "Technology's epic story - Kevin Kelly",
        "href": "https://www.youtube.com/watch?v=y97hd9voaJE"
    },
    {
        "title": "Inside the Egyptian revolution - Wael Ghonim",
        "href": "https://www.youtube.com/watch?v=C352T7xttbM"
    },
    {
        "title": "Don't insist on English! - Patricia Ryan",
        "href": "https://www.youtube.com/watch?v=sCTI5tcnEok"
    },
    {
        "title": "The terrors of sleep paralysis - Ami Angelowicz",
        "href": "https://www.youtube.com/watch?v=Ub8Wj_tJhdQ"
    },
    {
        "title": "What's below the tip of the iceberg? - Camille Seaman",
        "href": "https://www.youtube.com/watch?v=-PPGe7MU6ME"
    },
    {
        "title": "What is chemical equilibrium? - George Zaidan and Charles Morton",
        "href": "https://www.youtube.com/watch?v=dUMmoPdwBy4"
    },
    {
        "title": "What creates a total solar eclipse? - Andy Cohen",
        "href": "https://www.youtube.com/watch?v=Qog18tiNnqg"
    },
    {
        "title": "A brief history of plural word...s - John McWhorter",
        "href": "https://www.youtube.com/watch?v=_gwJHuEa9Jc"
    },
    {
        "title": "Making a TED-Ed Lesson: Two ways to animate slam poetry",
        "href": "https://www.youtube.com/watch?v=onZEkLpQ0FA"
    },
    {
        "title": "Ultrasound surgery -- healing without cuts - Yoav Medan",
        "href": "https://www.youtube.com/watch?v=9-M6lv57394"
    },
    {
        "title": "A census of the ocean - Paul Snelgrove",
        "href": "https://www.youtube.com/watch?v=pmPw_6fAFQM"
    },
    {
        "title": "Listening to shame - Brené Brown",
        "href": "https://www.youtube.com/watch?v=7jtZdSRst94"
    },
    {
        "title": "Let's transform energy -- with natural gas - T. Boone Pickens",
        "href": "https://www.youtube.com/watch?v=4NxN6PmxlBM"
    },
    {
        "title": "Yup, I built a nuclear fusion reactor - Taylor Wilson",
        "href": "https://www.youtube.com/watch?v=lV28dOGC_ps"
    },
    {
        "title": "Mysteries of vernacular: Fizzle - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=4TGixIAP92c"
    },
    {
        "title": "How to read music - Tim Hansen",
        "href": "https://www.youtube.com/watch?v=ZN41d7Txcq0"
    },
    {
        "title": "Tribal leadership - David Logan",
        "href": "https://www.youtube.com/watch?v=ATbyOuk0bvE"
    },
    {
        "title": "Animating a photo-real digital face - Paul Debevec",
        "href": "https://www.youtube.com/watch?v=r25lOeggxIw"
    },
    {
        "title": "Building a theater that remakes itself - Joshua Prince-Ramus",
        "href": "https://www.youtube.com/watch?v=o78pDcZAxF8"
    },
    {
        "title": "Creative houses from reclaimed stuff - Dan Phillips",
        "href": "https://www.youtube.com/watch?v=owbfNJMumEs"
    },
    {
        "title": "The case for collaborative consumption - Rachel Botsman",
        "href": "https://www.youtube.com/watch?v=X6FOp65MvxE"
    },
    {
        "title": "Exploring other dimensions - Alex Rosenthal and George Zaidan",
        "href": "https://www.youtube.com/watch?v=C6kn6nXMWF0"
    },
    {
        "title": "Got seeds? Just add bleach, acid and sandpaper - Mary Koga",
        "href": "https://www.youtube.com/watch?v=9zmB3Gx3e_s"
    },
    {
        "title": "What is dyslexia? - Kelli Sandman-Hurley",
        "href": "https://www.youtube.com/watch?v=zafiGBrFkRM"
    },
    {
        "title": "The moral dangers of non-lethal weapons - Stephen Coleman",
        "href": "https://www.youtube.com/watch?v=GCA93_exJDw"
    },
    {
        "title": "What we learned from 5 million books - Erez Lieberman Aiden and Jean-Baptiste Michel",
        "href": "https://www.youtube.com/watch?v=50MpgVJ8xAE"
    },
    {
        "title": "Making a TED-Ed Lesson: Animating zombies",
        "href": "https://www.youtube.com/watch?v=INFKdqxLgPs"
    },
    {
        "title": "Animation basics: The optical illusion of motion - TED-Ed",
        "href": "https://www.youtube.com/watch?v=V8A4qudmsX0"
    },
    {
        "title": "The best stats you've ever seen - Hans Rosling",
        "href": "https://www.youtube.com/watch?v=usdJgEwMinM"
    },
    {
        "title": "The surprising science of happiness - Nancy Etcoff",
        "href": "https://www.youtube.com/watch?v=uaalzEf5kPA"
    },
    {
        "title": "How to look inside the brain - Carl Schoonover",
        "href": "https://www.youtube.com/watch?v=sYhMAjfdxD8"
    },
    {
        "title": "Texting that saves lives - Nancy Lublin",
        "href": "https://www.youtube.com/watch?v=SItBgBy_oZk"
    },
    {
        "title": "The 4 commandments of cities - Eduardo Paes",
        "href": "https://www.youtube.com/watch?v=C_QRAHTw4M8"
    },
    {
        "title": "Tracking ancient diseases using ... plaque - Christina Warinner",
        "href": "https://www.youtube.com/watch?v=U8c1H4k21SU"
    },
    {
        "title": "Unlock the intelligence, passion, greatness of girls - Leymah Gbowee",
        "href": "https://www.youtube.com/watch?v=0aANTxQLeAo"
    },
    {
        "title": "Mysteries of vernacular: Jade - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=wLmi3CYGjX4"
    },
    {
        "title": "Da Vinci's Vitruvian Man of math - James Earle",
        "href": "https://www.youtube.com/watch?v=aMsaFP3kgqQ"
    },
    {
        "title": "Visualizing the medical data explosion - Anders Ynnerman",
        "href": "https://www.youtube.com/watch?v=4SZ_5fGEdpk"
    },
    {
        "title": "The linguistic genius of babies - Patricia Kuhl",
        "href": "https://www.youtube.com/watch?v=M-ymanHajN8"
    },
    {
        "title": "Why work doesn't happen at work - Jason Fried",
        "href": "https://www.youtube.com/watch?v=fXdsmvaXx78"
    },
    {
        "title": "How Mr. Condom made Thailand a better place - Mechai Viravaidya",
        "href": "https://www.youtube.com/watch?v=fSznVBd37Uo"
    },
    {
        "title": "The power of vulnerability - Brené Brown",
        "href": "https://www.youtube.com/watch?v=JjNtWRBdXws"
    },
    {
        "title": "The infinite life of pi - Reynaldo Lopes",
        "href": "https://www.youtube.com/watch?v=9a5vHXsUvUw"
    },
    {
        "title": "Comma story - Terisa Folaron",
        "href": "https://www.youtube.com/watch?v=GHnl1O3NGJk"
    },
    {
        "title": "Myths and misconceptions about evolution - Alex Gendler",
        "href": "https://www.youtube.com/watch?v=mZt1Gn0R22Q"
    },
    {
        "title": "Making a TED-Ed Lesson: Synesthesia and playing cards",
        "href": "https://www.youtube.com/watch?v=HMpi8Zf6FFc"
    },
    {
        "title": "4 lessons from robots about being human - Ken Goldberg",
        "href": "https://www.youtube.com/watch?v=HiKM-Mc3DHg"
    },
    {
        "title": "Toward a new understanding of mental illness - Thomas Insel",
        "href": "https://www.youtube.com/watch?v=CUuyzoTI948"
    },
    {
        "title": "Free falling in outer space - Matt J. Carlson",
        "href": "https://www.youtube.com/watch?v=tAUXIEr-VzM"
    },
    {
        "title": "On spaghetti sauce - Malcolm Gladwell",
        "href": "https://www.youtube.com/watch?v=VkhFh5Ms1vc"
    },
    {
        "title": "On positive psychology - Martin Seligman",
        "href": "https://www.youtube.com/watch?v=5CpLEOO5oyo"
    },
    {
        "title": "Mining minerals from seawater - Damian Palin",
        "href": "https://www.youtube.com/watch?v=nZk_BQm_vZU"
    },
    {
        "title": "What if our healthcare system kept us healthy? - Rebecca Onie",
        "href": "https://www.youtube.com/watch?v=3NjEV064AQ4"
    },
    {
        "title": "The 100,000-student classroom - Peter Norvig",
        "href": "https://www.youtube.com/watch?v=Olni0KKdZqc"
    },
    {
        "title": "Advice to young scientists - E.O. Wilson",
        "href": "https://www.youtube.com/watch?v=ptJg2GScPEQ"
    },
    {
        "title": "How Arduino is open-sourcing imagination - Massimo Banzi",
        "href": "https://www.youtube.com/watch?v=eFCk3qWmCoo"
    },
    {
        "title": "Mysteries of vernacular: Quarantine - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=MBZBqNrsAPM"
    },
    {
        "title": "Why eyewitnesses get it wrong - Scott Fraser",
        "href": "https://www.youtube.com/watch?v=4TQETLZZmcM"
    },
    {
        "title": "Welcome to the genomic revolution - Richard Resnick",
        "href": "https://www.youtube.com/watch?v=nAljnpoKVLw"
    },
    {
        "title": "Your brain on improv - Charles Limb",
        "href": "https://www.youtube.com/watch?v=U4k5JFmahVY"
    },
    {
        "title": "Moral behavior in animals - Frans de Waal",
        "href": "https://www.youtube.com/watch?v=PnnSjdpoBVw"
    },
    {
        "title": "Distant time and the hint of a multiverse - Sean Carroll",
        "href": "https://www.youtube.com/watch?v=5vUWmID5as8"
    },
    {
        "title": "What is an aurora? - Michael Molina",
        "href": "https://www.youtube.com/watch?v=czMh3BnHFHQ"
    },
    {
        "title": "Beatboxing 101 - BEAT NYC",
        "href": "https://www.youtube.com/watch?v=U0MCXDy0J0g"
    },
    {
        "title": "Inside your computer - Bettina Bair",
        "href": "https://www.youtube.com/watch?v=AkFi90lZmXA"
    },
    {
        "title": "Image recognition that triggers augmented reality - Matt Mills",
        "href": "https://www.youtube.com/watch?v=_pnUsvZzs5g"
    },
    {
        "title": "The human and the honeybee - Dino Martins",
        "href": "https://www.youtube.com/watch?v=ZJZsM4flpN4"
    },
    {
        "title": "A tale of mental illness -- from the inside - Elyn Saks",
        "href": "https://www.youtube.com/watch?v=tuv3R5uYm8s"
    },
    {
        "title": "How I'm preparing to get Alzheimer's - Alanna Shaikh",
        "href": "https://www.youtube.com/watch?v=3NpByotvdFA"
    },
    {
        "title": "A vision of crimes in the future - Marc Goodman",
        "href": "https://www.youtube.com/watch?v=QkPh4vGNpQk"
    },
    {
        "title": "Experiments that point to a new understanding of cancer - Mina Bissell",
        "href": "https://www.youtube.com/watch?v=YU-lMsLRtL0"
    },
    {
        "title": "Let's crowdsource the world's goals - Jamie Drummond",
        "href": "https://www.youtube.com/watch?v=TMKmUqk865g"
    },
    {
        "title": "If superpowers were real: Super strength - Joy Lin",
        "href": "https://www.youtube.com/watch?v=WOQhduHFp2I"
    },
    {
        "title": "If superpowers were real: Super speed - Joy Lin",
        "href": "https://www.youtube.com/watch?v=ryGR06dlPf0"
    },
    {
        "title": "If superpowers were real: Flight - Joy Lin",
        "href": "https://www.youtube.com/watch?v=0GDYCxQYbjg"
    },
    {
        "title": "If superpowers were real: Body mass - Joy Lin",
        "href": "https://www.youtube.com/watch?v=fpV7DKwcqbk"
    },
    {
        "title": "If superpowers were real: Immortality - Joy Lin",
        "href": "https://www.youtube.com/watch?v=uvMiz0-nPxs"
    },
    {
        "title": "If superpowers were real: Invisibility - Joy Lin",
        "href": "https://www.youtube.com/watch?v=w-YLJ-pHRhA"
    },
    {
        "title": "If superpowers were real, which would you choose? - Joy Lin",
        "href": "https://www.youtube.com/watch?v=0jF9xyF8mxQ"
    },
    {
        "title": "How do you save a shark you know nothing about? - Simon Berrow",
        "href": "https://www.youtube.com/watch?v=vIPyXQesFhk"
    },
    {
        "title": "A reality check on renewables - David MacKay",
        "href": "https://www.youtube.com/watch?v=E0W1ZZYIV8o"
    },
    {
        "title": "How great leaders inspire action - Simon Sinek",
        "href": "https://www.youtube.com/watch?v=57hPu0foQ3Q"
    },
    {
        "title": "Digital humanitarianism - Paul Conneally",
        "href": "https://www.youtube.com/watch?v=8XB2v-DqBug"
    },
    {
        "title": "How to fool a GPS - Todd Humphreys",
        "href": "https://www.youtube.com/watch?v=r4UdHE3JNnU"
    },
    {
        "title": "How to set the table - Anna Post",
        "href": "https://www.youtube.com/watch?v=KoU1XiQJ1vo"
    },
    {
        "title": "Vermicomposting: How worms can reduce our waste - Matthew Ross",
        "href": "https://www.youtube.com/watch?v=V8miLevRI_o"
    },
    {
        "title": "A critical examination of the technology in our lives - Kevin Shindel",
        "href": "https://www.youtube.com/watch?v=oR7ExVuHy5U"
    },
    {
        "title": "Is there a center of the universe? - Marjee Chmiel and Trevor Owens",
        "href": "https://www.youtube.com/watch?v=rIVkvrEiVm0"
    },
    {
        "title": "How big is the ocean? - Scott Gass",
        "href": "https://www.youtube.com/watch?v=QUW_Zv_jJb8"
    },
    {
        "title": "Medicine's future? There's an app for that - Daniel Kraft",
        "href": "https://www.youtube.com/watch?v=sNda62ZLN9o"
    },
    {
        "title": "Behind the Great Firewall of China - Michael Anti",
        "href": "https://www.youtube.com/watch?v=5t05I2DupoM"
    },
    {
        "title": "Building unimaginable shapes - Michael Hansmeyer",
        "href": "https://www.youtube.com/watch?v=pACNKOLZizE"
    },
    {
        "title": "Imaging at a trillion frames per second - Ramesh Raskar",
        "href": "https://www.youtube.com/watch?v=q_X4Slk3im0"
    },
    {
        "title": "Your phone company is watching - Malte Spitz",
        "href": "https://www.youtube.com/watch?v=cio4mrloqug"
    },
    {
        "title": "A Navy Admiral's thoughts on global security - James Stavridis",
        "href": "https://www.youtube.com/watch?v=2TnoQBitbNg"
    },
    {
        "title": "I listen to color - Neil Harbisson",
        "href": "https://www.youtube.com/watch?v=V5APNzLl2zU"
    },
    {
        "title": "Mysteries of vernacular: Gorgeous - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=LhMGK4dsgYw"
    },
    {
        "title": "Building a culture of success - Mark Wilson",
        "href": "https://www.youtube.com/watch?v=n_8Bjz-OCD8"
    },
    {
        "title": "Overcoming the scientific divide - Aaron Reedy",
        "href": "https://www.youtube.com/watch?v=NgasyGDQDeM"
    },
    {
        "title": "The magic of QR codes in the classroom - Karen Mensing",
        "href": "https://www.youtube.com/watch?v=NRgWRXFXLQs"
    },
    {
        "title": "Using unanswered questions to teach - John Gensic",
        "href": "https://www.youtube.com/watch?v=De5BNXTJtJQ"
    },
    {
        "title": "Fighting with non-violence - Scilla Elworthy",
        "href": "https://www.youtube.com/watch?v=jslAeNZFjvA"
    },
    {
        "title": "Want to help someone? Shut up and listen! - Ernesto Sirolli",
        "href": "https://www.youtube.com/watch?v=TbCxFrV3uiE"
    },
    {
        "title": "Why global jihad is losing - Bobby Ghosh",
        "href": "https://www.youtube.com/watch?v=OMygIvEMohg"
    },
    {
        "title": "Neuroscience, game theory, monkeys - Colin Camerer",
        "href": "https://www.youtube.com/watch?v=IPobRaUie18"
    },
    {
        "title": "The greatest machine that never was - John Graham-Cumming",
        "href": "https://www.youtube.com/watch?v=FlfChYGv3Z4"
    },
    {
        "title": "Equality, sports, and Title IX - Erin Buzuvis and Kristine Newhall",
        "href": "https://www.youtube.com/watch?v=KymR6N1HT88"
    },
    {
        "title": "The game-changing amniotic egg - April Tucker",
        "href": "https://www.youtube.com/watch?v=Qq0kMEWzdHg"
    },
    {
        "title": "Dissecting Botticelli's Adoration of the Magi - James Earle",
        "href": "https://www.youtube.com/watch?v=r8ffs_MeY5M"
    },
    {
        "title": "The happy secret to better work - Shawn Achor",
        "href": "https://www.youtube.com/watch?v=LqeAiz691-s"
    },
    {
        "title": "The rise of human-computer cooperation - Shyam Sankar",
        "href": "https://www.youtube.com/watch?v=ltCVp1ic-L8"
    },
    {
        "title": "What we're learning from online education - Daphne Koller",
        "href": "https://www.youtube.com/watch?v=2QLUtt86m0c"
    },
    {
        "title": "Dare to disagree - Margaret Heffernan",
        "href": "https://www.youtube.com/watch?v=bNBhOtu0D50"
    },
    {
        "title": "A test for Parkinson's with a phone call - Max Little",
        "href": "https://www.youtube.com/watch?v=ey9-ajrqTco"
    },
    {
        "title": "The art of creating awe - Rob Legato",
        "href": "https://www.youtube.com/watch?v=x_LKIFHy0Bs"
    },
    {
        "title": "Before I die I want to... - Candy Chang",
        "href": "https://www.youtube.com/watch?v=_wlVNYA46v8"
    },
    {
        "title": "The punishable perils of plagiarism - Melissa Huseman D'Annunzio",
        "href": "https://www.youtube.com/watch?v=SrjoaaIxaJI"
    },
    {
        "title": "Mysteries of vernacular: Window - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=k490Y72c1ig"
    },
    {
        "title": "Why Libya's revolution didn't work -- and what might - Zahra' Langhi",
        "href": "https://www.youtube.com/watch?v=ZyQv5SL11V0"
    },
    {
        "title": "Be an artist, right now! - Young-ha Kim",
        "href": "https://www.youtube.com/watch?v=DAMVhaWwrp0"
    },
    {
        "title": "Parkinson's, depression and the switch that might turn them off - Andres Lozano",
        "href": "https://www.youtube.com/watch?v=9wiHfHOPbyE"
    },
    {
        "title": "The security mirage - Bruce Schneier",
        "href": "https://www.youtube.com/watch?v=NB6rMkiNKtM"
    },
    {
        "title": "All your devices can be hacked - Avi Rubin",
        "href": "https://www.youtube.com/watch?v=BHHCvcCUOWU"
    },
    {
        "title": "The contributions of female explorers - Courtney Stephens",
        "href": "https://www.youtube.com/watch?v=60GAfOakQHA"
    },
    {
        "title": "How do we experience time? - Matt Danzico",
        "href": "https://www.youtube.com/watch?v=wwvkdqDoqdM"
    },
    {
        "title": "What color is Tuesday? Exploring synesthesia - Richard E. Cytowic",
        "href": "https://www.youtube.com/watch?v=rkRbebvoYqI"
    },
    {
        "title": "Let's talk about dying - Peter Saul",
        "href": "https://www.youtube.com/watch?v=lkvKGafoyIY"
    },
    {
        "title": "Your body language shapes who you are - Amy Cuddy",
        "href": "https://www.youtube.com/watch?v=RWZluriQUzE"
    },
    {
        "title": "Energy from floating algae pods - Jonathan Trent",
        "href": "https://www.youtube.com/watch?v=j6icJor2GfI"
    },
    {
        "title": "Mental health for all by involving all - Vikram Patel",
        "href": "https://www.youtube.com/watch?v=_yPpnl1V8NM"
    },
    {
        "title": "The promise of research with stem cells - Susan Solomon",
        "href": "https://www.youtube.com/watch?v=szTK7EJvDgk"
    },
    {
        "title": "A choreographer's creative process in real time - Wayne McGregor",
        "href": "https://www.youtube.com/watch?v=2ItUs5ZRHLg"
    },
    {
        "title": "Demand a more open-source government - Beth Noveck",
        "href": "https://www.youtube.com/watch?v=LU35Et4e-Yo"
    },
    {
        "title": "Mysteries of vernacular: Dynamite - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=Srq2yAABc1Q"
    },
    {
        "title": "Mysteries of vernacular: Venom - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=SsHnfVmb9OE"
    },
    {
        "title": "The post-crisis consumer - John Gerzema",
        "href": "https://www.youtube.com/watch?v=y6Sy6P5YSVo"
    },
    {
        "title": "Let's put birth control back on the agenda - Melinda Gates",
        "href": "https://www.youtube.com/watch?v=PNKbbSniAig"
    },
    {
        "title": "Ethical riddles in HIV research - Boghuma Kabisen Titanji",
        "href": "https://www.youtube.com/watch?v=7bcNEUjMjMI"
    },
    {
        "title": "Why democracy matters - Rory Stewart",
        "href": "https://www.youtube.com/watch?v=zeCBRMfYvl4"
    },
    {
        "title": "The secret of the bat genome - Emma Teeling",
        "href": "https://www.youtube.com/watch?v=D5yCT5DMXO0"
    },
    {
        "title": "The emergence of drama as a literary art - Mindy Ploeckelmann",
        "href": "https://www.youtube.com/watch?v=Yzcxd8tsJ3Q"
    },
    {
        "title": "Tracking grizzly bears from space - David Laskin",
        "href": "https://www.youtube.com/watch?v=mW1xBc1dwqI"
    },
    {
        "title": "How do you decide where to go in a zombie apocalypse? - David Hunter",
        "href": "https://www.youtube.com/watch?v=vdtQgwOOiBg"
    },
    {
        "title": "Cheese, dogs and a pill to kill mosquitoes and end malaria - Bart Knols",
        "href": "https://www.youtube.com/watch?v=iVcJmZcxlIY"
    },
    {
        "title": "A new way to diagnose autism - Ami Klin",
        "href": "https://www.youtube.com/watch?v=b-J8d1zfRIM"
    },
    {
        "title": "The mysterious workings of the adolescent brain - Sarah-Jayne Blakemore",
        "href": "https://www.youtube.com/watch?v=6oKsikHollM"
    },
    {
        "title": "Why architects need to use their ears - Julian Treasure",
        "href": "https://www.youtube.com/watch?v=xfzUTbhwTJ4"
    },
    {
        "title": "What is the Internet, really? - Andrew Blum",
        "href": "https://www.youtube.com/watch?v=gCtlzT0HsZM"
    },
    {
        "title": "A story about knots and surgeons - Ed Gavagan",
        "href": "https://www.youtube.com/watch?v=xFDJuAQ1lec"
    },
    {
        "title": "What we're learning from 5,000 brains - Read Montague",
        "href": "https://www.youtube.com/watch?v=fWxce7Jjxsk"
    },
    {
        "title": "What doctors don't know about the drugs they prescribe - Ben Goldacre",
        "href": "https://www.youtube.com/watch?v=5vTSSxcNK4s"
    },
    {
        "title": "Mining literature for deeper meanings - Amy E. Harter",
        "href": "https://www.youtube.com/watch?v=eREopphW5Bw"
    },
    {
        "title": "Gyotaku: The ancient Japanese art of printing fish - K. Erica Dodge",
        "href": "https://www.youtube.com/watch?v=k_mG-Ka4mv8"
    },
    {
        "title": "Making sense of maps - Aris Venetikidis",
        "href": "https://www.youtube.com/watch?v=gIPiU7DUlY4"
    },
    {
        "title": "What on Earth is spin? - Brian Jones",
        "href": "https://www.youtube.com/watch?v=H4JUTnkiGpI"
    },
    {
        "title": "A broken body isn't a broken person - Janine Shepherd",
        "href": "https://www.youtube.com/watch?v=XVJuf7FXovw"
    },
    {
        "title": "Put those smartphones away: Great tips for making your job interview count - Anna Post",
        "href": "https://www.youtube.com/watch?v=NKBlWanXzGE"
    },
    {
        "title": "Is space trying to kill us? - Ron Shaneyfelt",
        "href": "https://www.youtube.com/watch?v=iX2w3q_O25c"
    },
    {
        "title": "Making a TED-Ed Lesson: Animation",
        "href": "https://www.youtube.com/watch?v=OB6WYW6kp2s"
    },
    {
        "title": "Making a TED-Ed Lesson: Creative process",
        "href": "https://www.youtube.com/watch?v=M21jHWxdI2w"
    },
    {
        "title": "Making a TED-Ed Lesson: Concept and design",
        "href": "https://www.youtube.com/watch?v=j8xJs2Yjf8I"
    },
    {
        "title": "Looks aren't everything. Believe me, I'm a model - Cameron Russell",
        "href": "https://www.youtube.com/watch?v=ks1FEtWlzTU"
    },
    {
        "title": "Actually, the world isn't flat - Pankaj Ghemawat",
        "href": "https://www.youtube.com/watch?v=pfPSrdISUwk"
    },
    {
        "title": "Let's prepare for our new climate - Vicki Arroyo",
        "href": "https://www.youtube.com/watch?v=ImmFkjFm-k0"
    },
    {
        "title": "What's so funny about mental illness? - Ruby Wax",
        "href": "https://www.youtube.com/watch?v=Da8AR47BNdE"
    },
    {
        "title": "Science is for everyone, kids included - Beau Lotto and Amy O'Toole",
        "href": "https://www.youtube.com/watch?v=DGNSkAhkPys"
    },
    {
        "title": "Let's pool our medical data - John Wilbanks",
        "href": "https://www.youtube.com/watch?v=pNtw-m1fVug"
    },
    {
        "title": "The secret lives of paintings - Maurizio Seracini",
        "href": "https://www.youtube.com/watch?v=jT6BqMWPOqE"
    },
    {
        "title": "Mysteries of vernacular: Inaugurate - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=AmOTf0eYcgo"
    },
    {
        "title": "Reasons for the seasons - Rebecca Kaplan",
        "href": "https://www.youtube.com/watch?v=DD_8Jm5pTLk"
    },
    {
        "title": "How movies teach manhood - Colin Stokes",
        "href": "https://www.youtube.com/watch?v=3ywYXbGKstQ"
    },
    {
        "title": "What is fat? - George Zaidan",
        "href": "https://www.youtube.com/watch?v=QhUrc4BnPgg"
    },
    {
        "title": "Why do fingers become pruney? - Mark Changizi",
        "href": "https://www.youtube.com/watch?v=k7ve_ibAY1s"
    },
    {
        "title": "Why domestic violence victims don't leave - Leslie Morgan Steiner",
        "href": "https://www.youtube.com/watch?v=UmXdk1el8Hs"
    },
    {
        "title": "What's an algorithm? - David J. Malan",
        "href": "https://www.youtube.com/watch?v=6hfOvs8pY1k"
    },
    {
        "title": "A universal translator for surgeons - Steven Schwaitzberg",
        "href": "https://www.youtube.com/watch?v=AZOBCQ_7JEM"
    },
    {
        "title": "A cinematic journey through visual effects - Don Levy",
        "href": "https://www.youtube.com/watch?v=XO_F2yQJKmI"
    },
    {
        "title": "How open data is changing international aid - Sanjay Pradhan",
        "href": "https://www.youtube.com/watch?v=3siMH0nimIs"
    },
    {
        "title": "The arts festival revolution - David Binder",
        "href": "https://www.youtube.com/watch?v=dcGkiiSe-J0"
    },
    {
        "title": "Could tissue engineering mean personalized medicine? - Nina Tandon",
        "href": "https://www.youtube.com/watch?v=_7TKiFRkKGY"
    },
    {
        "title": "Excuse me, may I rent your car? - Robin Chase",
        "href": "https://www.youtube.com/watch?v=PVP3VaC4NrI"
    },
    {
        "title": "What fear can teach us - Karen Thompson Walker",
        "href": "https://www.youtube.com/watch?v=wgB-mvzXGuA"
    },
    {
        "title": "Pros and cons of public opinion polls - Jason Robert Jaffe",
        "href": "https://www.youtube.com/watch?v=ubR8rEgSZSU"
    },
    {
        "title": "Ladies and gentlemen, the Hobart Shakespeareans",
        "href": "https://www.youtube.com/watch?v=cYnkRvYGnEk"
    },
    {
        "title": "Animation basics: Homemade special effects - TED-Ed",
        "href": "https://www.youtube.com/watch?v=dq-3JfRrgRM"
    },
    {
        "title": "Who controls the world? - James B. Glattfelder",
        "href": "https://www.youtube.com/watch?v=cWVk8Cdvmgs"
    },
    {
        "title": "The brilliance of bioluminescence - Leslie Kenna",
        "href": "https://www.youtube.com/watch?v=oKjFVBVGad0"
    },
    {
        "title": "Four sisters in Ancient Rome - Ray Laurence",
        "href": "https://www.youtube.com/watch?v=RQMgLxVxsrw"
    },
    {
        "title": "Meet Shahruz Ghaemi",
        "href": "https://www.youtube.com/watch?v=QwFH7TGdwgA"
    },
    {
        "title": "A girl who demanded school - Kakenya Ntaiya",
        "href": "https://www.youtube.com/watch?v=7FXSPlB1Ohc"
    },
    {
        "title": "Biofuels and bioprospecting for beginners - Craig A. Kohn",
        "href": "https://www.youtube.com/watch?v=b_lT6mJM_fA"
    },
    {
        "title": "Your brain is more than a bag of chemicals - David Anderson",
        "href": "https://www.youtube.com/watch?v=GTesuokLc4w"
    },
    {
        "title": "Weaving narratives in museum galleries - Thomas P. Campbell",
        "href": "https://www.youtube.com/watch?v=5QXeIqvQNHo"
    },
    {
        "title": "Print your own medicine - Lee Cronin",
        "href": "https://www.youtube.com/watch?v=SOplWvrjnS4"
    },
    {
        "title": "Averting the climate crisis - Al Gore",
        "href": "https://www.youtube.com/watch?v=r593zLtZxAU"
    },
    {
        "title": "Embrace the remix - Kirby Ferguson",
        "href": "https://www.youtube.com/watch?v=Ltbi0uHZpOs"
    },
    {
        "title": "Can democracy exist without trust? - Ivan Krastev",
        "href": "https://www.youtube.com/watch?v=RRzK9u75XUg"
    },
    {
        "title": "Mysteries of vernacular: Earwig - Jessica Oreck and Rachael Teel",
        "href": "https://www.youtube.com/watch?v=k-fopkhoHMI"
    },
    {
        "title": "How giant sea creatures eat tiny sea creatures - Kelly Benoit-Bird",
        "href": "https://www.youtube.com/watch?v=UC7EqN42woQ"
    },
    {
        "title": "How a fly flies - Michael Dickinson",
        "href": "https://www.youtube.com/watch?v=9OgidK7dRW0"
    },
    {
        "title": "Meet Shayna Cody",
        "href": "https://www.youtube.com/watch?v=o2HcKp1WN3c"
    },
    {
        "title": "Meet Melissa Perez",
        "href": "https://www.youtube.com/watch?v=19HB_AdAnCY"
    },
    {
        "title": "Meet Julia Delmedico",
        "href": "https://www.youtube.com/watch?v=br1TOrdoli4"
    },
    {
        "title": "Strange answers to the psychopath test - Jon Ronson",
        "href": "https://www.youtube.com/watch?v=TLPQ765VS6E"
    },
    {
        "title": "Archeology from space - Sarah Parcak",
        "href": "https://www.youtube.com/watch?v=f1BxHghoQnk"
    },
    {
        "title": "Why is 'x' the unknown? - Terry Moore",
        "href": "https://www.youtube.com/watch?v=yo7frsh6wtI"
    },
    {
        "title": "The journey across the high wire - Philippe Petit",
        "href": "https://www.youtube.com/watch?v=eJrzj06FIYg"
    },
    {
        "title": "What's left to explore? - Nathan Wolfe",
        "href": "https://www.youtube.com/watch?v=BGfeBewgdQE"
    },
    {
        "title": "Historical role models - Amy Bissetta",
        "href": "https://www.youtube.com/watch?v=CsOwVZrWRYc"
    },
    {
        "title": "The single biggest health threat women face - Noel Bairey Merz",
        "href": "https://www.youtube.com/watch?v=Xl479V5I0bU"
    },
    {
        "title": "The mathematics of history - Jean-Baptiste Michel",
        "href": "https://www.youtube.com/watch?v=Jrjxu-eLYAo"
    },
    {
        "title": "What happened to antimatter? - Rolf Landua",
        "href": "https://www.youtube.com/watch?v=CtR5EkvLNfg"
    },
    {
        "title": "The basics of the Higgs boson - Dave Barney and Steve Goldfarb",
        "href": "https://www.youtube.com/watch?v=IElHgJG5Fe4"
    },
    {
        "title": "Big Data - Tim Smith",
        "href": "https://www.youtube.com/watch?v=j-0cUmUyb-Y"
    },
    {
        "title": "Dark matter: The matter we can't see - James Gillies",
        "href": "https://www.youtube.com/watch?v=HneiEA1B8ks"
    },
    {
        "title": "How did feathers evolve? - Carl Zimmer",
        "href": "https://www.youtube.com/watch?v=hPLgfGX1I5Y"
    },
    {
        "title": "Sometimes it's good to give up the driver's seat - Baba Shiv",
        "href": "https://www.youtube.com/watch?v=QpHTd4WX0vI"
    },
    {
        "title": "Mysteries of vernacular: Tuxedo - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=Rk9MIXSK1tM"
    },
    {
        "title": "How do you know whom to trust? - Ram Neta",
        "href": "https://www.youtube.com/watch?v=aTfat5TZyI8"
    },
    {
        "title": "The dance of the dung beetle - Marcus Byrne",
        "href": "https://www.youtube.com/watch?v=qPjI6YFFgA4"
    },
    {
        "title": "A host of heroes - April Gudenrath",
        "href": "https://www.youtube.com/watch?v=_p9Q8Dj3X2c"
    },
    {
        "title": "Pool medical patents, save lives - Ellen 't Hoen",
        "href": "https://www.youtube.com/watch?v=hGbJclE-Tw4"
    },
    {
        "title": "A 40-year plan for energy - Amory Lovins",
        "href": "https://www.youtube.com/watch?v=PQqv8cWWV2U"
    },
    {
        "title": "The optimism bias - Tali Sharot",
        "href": "https://www.youtube.com/watch?v=vQ6JJjyYHbk"
    },
    {
        "title": "404, the story of a page not found - Renny Gleeson",
        "href": "https://www.youtube.com/watch?v=OwvPaMolTFU"
    },
    {
        "title": "Feats of memory anyone can do - Joshua Foer",
        "href": "https://www.youtube.com/watch?v=LQMnMKREriM"
    },
    {
        "title": "Music and emotion through time - Michael Tilson Thomas",
        "href": "https://www.youtube.com/watch?v=P1Ut5iiKgYY"
    },
    {
        "title": "Tracking the trackers - Gary Kovacs",
        "href": "https://www.youtube.com/watch?v=me6NciKf3Bk"
    },
    {
        "title": "Pavlovian reactions aren't just for dogs - Benjamin N. Witts",
        "href": "https://www.youtube.com/watch?v=dgCvNSQ82Iw"
    },
    {
        "title": "The search for other Earth-like planets - Olivier Guyon",
        "href": "https://www.youtube.com/watch?v=JTNY92xeFS0"
    },
    {
        "title": "Let's teach kids to code - Mitch Resnick",
        "href": "https://www.youtube.com/watch?v=3dciD9FO9mc"
    },
    {
        "title": "How much does a video weigh? - Michael Stevens of Vsauce",
        "href": "https://www.youtube.com/watch?v=yzQDFKY2uEI"
    },
    {
        "title": "Exciting news from TED-Ed...",
        "href": "https://www.youtube.com/watch?v=nPi7khlLywA"
    },
    {
        "title": "Making sense of how life fits together - Bobbi Seleski",
        "href": "https://www.youtube.com/watch?v=IYSlId-Ri7Q"
    },
    {
        "title": "Hey science teachers -- make it fun - Tyler DeWitt",
        "href": "https://www.youtube.com/watch?v=9r3yGCq4InA"
    },
    {
        "title": "String theory and the hidden structures of the universe - Clifford Johnson",
        "href": "https://www.youtube.com/watch?v=nqRTv4WdL2s"
    },
    {
        "title": "Dare to educate Afghan girls - Shabana Basij-Rasikh",
        "href": "https://www.youtube.com/watch?v=5l3U1xqyLLM"
    },
    {
        "title": "From mach-20 glider to humming bird drone - Regina Dugan",
        "href": "https://www.youtube.com/watch?v=5_a6KP2JgOI"
    },
    {
        "title": "A giant bubble for debate - Liz Diller",
        "href": "https://www.youtube.com/watch?v=yxi-yA_loYo"
    },
    {
        "title": "Is our universe the only universe? - Brian Greene",
        "href": "https://www.youtube.com/watch?v=Vx2RcUQNh6Q"
    },
    {
        "title": "How do we heal medicine? - Atul Gawande",
        "href": "https://www.youtube.com/watch?v=K14NT_74Zf0"
    },
    {
        "title": "How can technology transform the human body? - Lucy McRae",
        "href": "https://www.youtube.com/watch?v=HlO23t8cKZM"
    },
    {
        "title": "Connected, but alone? - Sherry Turkle",
        "href": "https://www.youtube.com/watch?v=rv0g8TsnA6c"
    },
    {
        "title": "Mysteries of vernacular: Miniature - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=1_JqwvvEpRM"
    },
    {
        "title": "How does an atom-smashing particle accelerator work? - Don Lincoln",
        "href": "https://www.youtube.com/watch?v=G6mmIzRz_f8"
    },
    {
        "title": "How to live to be 100+ - Dan Buettner",
        "href": "https://www.youtube.com/watch?v=ff40YiMmVkU"
    },
    {
        "title": "The magic of Vedic math - Gaurav Tekriwal",
        "href": "https://www.youtube.com/watch?v=grkWGeqW99c"
    },
    {
        "title": "How to solve traffic jams - Jonas Eliasson",
        "href": "https://www.youtube.com/watch?v=yvPowPkFrhg"
    },
    {
        "title": "What is Zeno's Dichotomy Paradox? - Colm Kelleher",
        "href": "https://www.youtube.com/watch?v=EfqVnj-sgcc"
    },
    {
        "title": "Every city needs healthy honey bees - Noah Wilson-Rich",
        "href": "https://www.youtube.com/watch?v=DwGoZA8ZpHo"
    },
    {
        "title": "A future beyond traffic gridlock - Bill Ford",
        "href": "https://www.youtube.com/watch?v=XNqm4Yvr0uM"
    },
    {
        "title": "Why I must speak out about climate change - James Hansen",
        "href": "https://www.youtube.com/watch?v=cmoeTSassrI"
    },
    {
        "title": "We need to talk about an injustice - Bryan Stevenson",
        "href": "https://www.youtube.com/watch?v=8cKfCmSqZ5s"
    },
    {
        "title": "The Earth is full - Paul Gilding",
        "href": "https://www.youtube.com/watch?v=d_7cCUI63K4"
    },
    {
        "title": "The quest to understand consciousness - Antonio Damasio",
        "href": "https://www.youtube.com/watch?v=AWOC29YitGQ"
    },
    {
        "title": "Less stuff, more happiness - Graham Hill",
        "href": "https://www.youtube.com/watch?v=nS4BriU-lkU"
    },
    {
        "title": "How is power divided in the United States government? - Belinda Stutzman",
        "href": "https://www.youtube.com/watch?v=HuFR5XBYLfU"
    },
    {
        "title": "What's a snollygoster? A short lesson in political speak - Mark Forsyth",
        "href": "https://www.youtube.com/watch?v=MJnK2DFapWQ"
    },
    {
        "title": "What cameras see that our eyes don't - Bill Shribman",
        "href": "https://www.youtube.com/watch?v=KUiemQTEOYQ"
    },
    {
        "title": "The beginning of the universe, for beginners - Tom Whyntie",
        "href": "https://www.youtube.com/watch?v=DmUiCweDic4"
    },
    {
        "title": "The strange politics of disgust - David Pizarro",
        "href": "https://www.youtube.com/watch?v=pqX9zMuKENc"
    },
    {
        "title": "Self-assembly: The power of organizing the unorganized - Skylar Tibbits",
        "href": "https://www.youtube.com/watch?v=2Lfm1uRPqo8"
    },
    {
        "title": "Healthier men, one moustache at a time - Adam Garone",
        "href": "https://www.youtube.com/watch?v=6D4Mmr2E7hM"
    },
    {
        "title": "A light switch for neurons - Ed Boyden",
        "href": "https://www.youtube.com/watch?v=az9tHuOzOfA"
    },
    {
        "title": "Different ways of knowing - Daniel Tammet",
        "href": "https://www.youtube.com/watch?v=AV3s8fFfUI8"
    },
    {
        "title": "A Rosetta Stone for the Indus script - Rajesh Rao",
        "href": "https://www.youtube.com/watch?v=a_-obTZO6pY"
    },
    {
        "title": "Try something new for 30 days - Matt Cutts",
        "href": "https://www.youtube.com/watch?v=UNP03fDSj1U"
    },
    {
        "title": "Unintended consequences - Edward Tenner",
        "href": "https://www.youtube.com/watch?v=a5G_mPCPpzk"
    },
    {
        "title": "Doodlers, unite! - Sunni Brown",
        "href": "https://www.youtube.com/watch?v=iTboKWWuaSY"
    },
    {
        "title": "8 traits of successful people - Richard St. John",
        "href": "https://www.youtube.com/watch?v=NOl0v54DaXo"
    },
    {
        "title": "The power of passion - Richard St. John",
        "href": "https://www.youtube.com/watch?v=tNu6on8dk2o"
    },
    {
        "title": "Why it pays to work hard - Richard St. John",
        "href": "https://www.youtube.com/watch?v=a6FvEwLBgBo"
    },
    {
        "title": "Mysteries of vernacular: Noise - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=uXYWGyjelU8"
    },
    {
        "title": "Mysteries of vernacular: Hearse - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=ECjNoY_qNfE"
    },
    {
        "title": "A call to invention: DIY speaker edition - William Gurstelle",
        "href": "https://www.youtube.com/watch?v=9pZr-3D2Mus"
    },
    {
        "title": "The future of lying - Jeff Hancock",
        "href": "https://www.youtube.com/watch?v=8aAivrIUH1s"
    },
    {
        "title": "Mysteries of vernacular: Assassin - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=k5sqS3sQ7Z4"
    },
    {
        "title": "Networking for the networking averse - Lisa Green Chau",
        "href": "https://www.youtube.com/watch?v=garadDEgkwU"
    },
    {
        "title": "Mysteries of vernacular: Pants - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=UdGShxutLeE"
    },
    {
        "title": "Who is Alexander von Humboldt? - George Mehler",
        "href": "https://www.youtube.com/watch?v=EzakQuKqBeQ"
    },
    {
        "title": "TED-Ed YouTube Channel Teaser",
        "href": "https://www.youtube.com/watch?v=2QZaONSuYKM"
    },
    {
        "title": "Kids need structure - Colin Powell",
        "href": "https://www.youtube.com/watch?v=vzvVNAwJKMc"
    },
    {
        "title": "Mysteries of vernacular: Clue - Jessica Oreck",
        "href": "https://www.youtube.com/watch?v=qOXuJqr1UhU"
    },
    {
        "title": "Early forensics and crime-solving chemists - Deborah Blum",
        "href": "https://www.youtube.com/watch?v=ORpeZP0jiCk"
    },
    {
        "title": "The mystery of chronic pain - Elliot Krane",
        "href": "https://www.youtube.com/watch?v=CZ0gIiwjk_0"
    },
    {
        "title": "Building the Seed Cathedral - Thomas Heatherwick",
        "href": "https://www.youtube.com/watch?v=LrtMUzZ_0TQ"
    },
    {
        "title": "Building a dinosaur from a chicken - Jack Horner",
        "href": "https://www.youtube.com/watch?v=BqNnqf_3Z7M"
    },
    {
        "title": "Making sense of a visible quantum object - Aaron O'Connell",
        "href": "https://www.youtube.com/watch?v=NmW9smtierY"
    },
    {
        "title": "Making a car for blind drivers - Dennis Hong",
        "href": "https://www.youtube.com/watch?v=UReC9XwMjxc"
    },
    {
        "title": "How we'll stop polio for good - Bruce Aylward",
        "href": "https://www.youtube.com/watch?v=1GuSQFAMckQ"
    },
    {
        "title": "The weird, wonderful world of bioluminescence - Edith Widder",
        "href": "https://www.youtube.com/watch?v=lKeDBpkrDUA"
    },
    {
        "title": "Want to be happier? Stay in the moment - Matt Killingsworth",
        "href": "https://www.youtube.com/watch?v=ZOETUvaOxDA"
    },
    {
        "title": "Your brain on video games - Daphne Bavelier",
        "href": "https://www.youtube.com/watch?v=448naPYDVpA"
    },
    {
        "title": "Become a slam poet in five steps - Gayle Danley",
        "href": "https://www.youtube.com/watch?v=9f8VcV8v2LE"
    },
    {
        "title": "Euclid's puzzling parallel postulate - Jeff Dekofsky",
        "href": "https://www.youtube.com/watch?v=LPET_HhN0VM"
    },
    {
        "title": "Could the sun be good for your heart? - Richard Weller",
        "href": "https://www.youtube.com/watch?v=gFsFF9gX_6I"
    },
    {
        "title": "Haptography: Digitizing our sense of touch - Katherine Kuchenbecker",
        "href": "https://www.youtube.com/watch?v=6wJ9Aakddng"
    },
    {
        "title": "Are we ready for neo-evolution? - Harvey Fineberg",
        "href": "https://www.youtube.com/watch?v=mdT01GAGECU"
    },
    {
        "title": "The lost art of democratic debate - Michael Sandel",
        "href": "https://www.youtube.com/watch?v=HkgHLK9_Zt8"
    },
    {
        "title": "Building a museum of museums on the web - Amit Sood",
        "href": "https://www.youtube.com/watch?v=l1JIqxXmZhU"
    },
    {
        "title": "The hidden power of smiling - Ron Gutman",
        "href": "https://www.youtube.com/watch?v=2ovO5rCGNNY"
    },
    {
        "title": "Silk, the ancient material of the future - Fiorenzo Omenetto",
        "href": "https://www.youtube.com/watch?v=MUc5Nv4Zprs"
    },
    {
        "title": "The hidden beauty of pollination - Louie Schwartzberg",
        "href": "https://www.youtube.com/watch?v=lJ-xLc2dxCE"
    },
    {
        "title": "Beware online \"filter bubbles\" - Eli Pariser",
        "href": "https://www.youtube.com/watch?v=4w48Ip-KPRs"
    },
    {
        "title": "Your elusive creative genius - Elizabeth Gilbert",
        "href": "https://www.youtube.com/watch?v=4HBJa279i8M"
    },
    {
        "title": "How farming planted seeds for the Internet - Patricia Russac",
        "href": "https://www.youtube.com/watch?v=3Evl0tQAdXI"
    },
    {
        "title": "Why do we see illusions? - Mark Changizi",
        "href": "https://www.youtube.com/watch?v=1xcvWSeZPbw"
    },
    {
        "title": "Dear Subscribers...",
        "href": "https://www.youtube.com/watch?v=ncqVw1sx-04"
    },
    {
        "title": "The story behind the Boston Tea Party - Ben Labaree",
        "href": "https://www.youtube.com/watch?v=1cT_Z0KGhP8"
    },
    {
        "title": "Social animal - David Brooks",
        "href": "https://www.youtube.com/watch?v=ozdSZANu33M"
    },
    {
        "title": "Let's use video to reinvent education - Salman Khan",
        "href": "https://www.youtube.com/watch?v=DC58z4N0IWw"
    },
    {
        "title": "3 things I learned while my plane crashed - Ric Elias",
        "href": "https://www.youtube.com/watch?v=u22QB6nCw8o"
    },
    {
        "title": "On being wrong - Kathryn Schulz",
        "href": "https://www.youtube.com/watch?v=2n__I-PRl7w"
    },
    {
        "title": "The history of our world in 18 minutes - David Christian",
        "href": "https://www.youtube.com/watch?v=V_YBFVEC7Gg"
    },
    {
        "title": "The greatest TED Talk ever sold - Morgan Spurlock",
        "href": "https://www.youtube.com/watch?v=Y2jyjfcp1as"
    },
    {
        "title": "The sound the universe makes - Janna Levin",
        "href": "https://www.youtube.com/watch?v=mbIkUptDLdc"
    },
    {
        "title": "Printing a human kidney - Anthony Atala",
        "href": "https://www.youtube.com/watch?v=bX3C201O4MA"
    },
    {
        "title": "The infamous and ingenious Ho Chi Minh Trail - Cameron Paterson",
        "href": "https://www.youtube.com/watch?v=poE_nNW9-yk"
    },
    {
        "title": "What is verbal irony? - Christopher Warner",
        "href": "https://www.youtube.com/watch?v=IiR-bnCHIYo"
    },
    {
        "title": "How Mendel's pea plants helped us understand genetics - Hortensia Jiménez Díaz",
        "href": "https://www.youtube.com/watch?v=Mehz7tCxjSE"
    },
    {
        "title": "Working backward to solve problems - Maurice Ashley",
        "href": "https://www.youtube.com/watch?v=v34NqCbAA1c"
    },
    {
        "title": "How state budgets are breaking US schools - Bill Gates",
        "href": "https://www.youtube.com/watch?v=sbWju-Pt4fk"
    },
    {
        "title": "Fractals and the art of roughness - Benoit Mandelbrot",
        "href": "https://www.youtube.com/watch?v=wQTnVEXAtBY"
    },
    {
        "title": "A 3D atlas of the universe - Carter Emmart",
        "href": "https://www.youtube.com/watch?v=MlOjSQeO1Dg"
    },
    {
        "title": "How YouTube thinks about copyright - Margaret Gould Stewart",
        "href": "https://www.youtube.com/watch?v=PArSFhmiHYo"
    },
    {
        "title": "The pattern behind self-deception - Michael Shermer",
        "href": "https://www.youtube.com/watch?v=ODKUnO7aZ8k"
    },
    {
        "title": "How architecture helped music evolve - David Byrne",
        "href": "https://www.youtube.com/watch?v=p6uXJWxpKBM"
    },
    {
        "title": "HIV and flu -- the vaccine strategy - Seth Berkley",
        "href": "https://www.youtube.com/watch?v=t_uFZa_g2eU"
    },
    {
        "title": "The difference between classical and operant conditioning - Peggy Andover",
        "href": "https://www.youtube.com/watch?v=H6LEcM0E0io"
    },
    {
        "title": "The importance of focus - Richard St. John",
        "href": "https://www.youtube.com/watch?v=77RubAueWjg"
    },
    {
        "title": "Visualizing hidden worlds inside your body - Dee Breger",
        "href": "https://www.youtube.com/watch?v=GR9p7gC11S4"
    },
    {
        "title": "The simple story of photosynthesis and food - Amanda Ooten",
        "href": "https://www.youtube.com/watch?v=eo5XndJaz-Y"
    },
    {
        "title": "How to organize, add and multiply matrices - Bill Shillito",
        "href": "https://www.youtube.com/watch?v=kqWCwwyeE6k"
    },
    {
        "title": "The tribes we lead - Seth Godin",
        "href": "https://www.youtube.com/watch?v=589tH-wtCak"
    },
    {
        "title": "Does racism affect how you vote? - Nate Silver",
        "href": "https://www.youtube.com/watch?v=0i_M3Bd_7Ao"
    },
    {
        "title": "Planning for the end of oil - Richard Sears",
        "href": "https://www.youtube.com/watch?v=tbVvUeYEwzU"
    },
    {
        "title": "The world's English mania - Jay Walker",
        "href": "https://www.youtube.com/watch?v=ZpILR21GWao"
    },
    {
        "title": "Supercharged motorcycle design - Yves Behar",
        "href": "https://www.youtube.com/watch?v=BsMVoLO7Owk"
    },
    {
        "title": "Could a Saturn moon harbor life? - Carolyn Porco",
        "href": "https://www.youtube.com/watch?v=TRQdHrGuVgI"
    },
    {
        "title": "The business logic of sustainability - Ray Anderson",
        "href": "https://www.youtube.com/watch?v=A35hen_d6eA"
    },
    {
        "title": "A new ecosystem for electric cars - Shai Agassi",
        "href": "https://www.youtube.com/watch?v=n_2VNec5Dfs"
    },
    {
        "title": "Illuminating photography: From camera obscura to camera phone - Eva Timothy",
        "href": "https://www.youtube.com/watch?v=XaGUL8B-BrE"
    },
    {
        "title": "Beach Bodies (in spoken word) - David Fasanya and Gabriel Barralaga",
        "href": "https://www.youtube.com/watch?v=nVnPQw0f8Qc"
    },
    {
        "title": "Insights into cell membranes via dish detergent - Ethan Perlstein",
        "href": "https://www.youtube.com/watch?v=yAXnYcUjn5k"
    },
    {
        "title": "Why are blue whales so enormous? - Asha de Vos",
        "href": "https://www.youtube.com/watch?v=FrK9WDMOqBI"
    },
    {
        "title": "How art gives shape to cultural change - Thelma Golden",
        "href": "https://www.youtube.com/watch?v=1FCihq5n-hE"
    },
    {
        "title": "The danger of science denial - Michael Specter",
        "href": "https://www.youtube.com/watch?v=JDBkeYSxPtY"
    },
    {
        "title": "High-altitude wind energy from kites! - Saul Griffith",
        "href": "https://www.youtube.com/watch?v=fC_y1u9jQ2w"
    },
    {
        "title": "How to restore a rainforest - Willie Smits",
        "href": "https://www.youtube.com/watch?v=dXWikNXiG2Q"
    },
    {
        "title": "How Benjamin Button got his face - Ed Ulbrich",
        "href": "https://www.youtube.com/watch?v=52JqQkx_VDc"
    },
    {
        "title": "The El Sistema music revolution - Jose Antonio Abreu",
        "href": "https://www.youtube.com/watch?v=rYXK8TZADws"
    },
    {
        "title": "Toy tiles that talk to each other - David Merrill",
        "href": "https://www.youtube.com/watch?v=qf7UnH1AHYA"
    },
    {
        "title": "Mosquitos, malaria and education - Bill Gates",
        "href": "https://www.youtube.com/watch?v=ZLkbWUNQbgk"
    },
    {
        "title": "Why I'm a weekday vegetarian - Graham Hill",
        "href": "https://www.youtube.com/watch?v=aUJD3sGppUo"
    },
    {
        "title": "Toward a science of simplicity - George Whitesides",
        "href": "https://www.youtube.com/watch?v=GayY-mjZXrQ"
    },
    {
        "title": "What adults can learn from kids - Adora Svitak",
        "href": "https://www.youtube.com/watch?v=TN79Qyddsf0"
    },
    {
        "title": "Visualizing the world's Twitter data - Jer Thorp",
        "href": "https://www.youtube.com/watch?v=tI61JjXdo_I"
    },
    {
        "title": "Gridiron physics: Scalars and vectors - Michelle Buchanan",
        "href": "https://www.youtube.com/watch?v=nF5S0FLp19Y"
    },
    {
        "title": "Distorting Madonna in Medieval art - James Earle",
        "href": "https://www.youtube.com/watch?v=ReM-G9V5VrY"
    },
    {
        "title": "Inventing the American presidency - Kenneth C. Davis",
        "href": "https://www.youtube.com/watch?v=k3kcl2HDlww"
    },
    {
        "title": "Let's simplify legal jargon - Alan Siegel",
        "href": "https://www.youtube.com/watch?v=GbEeMolAUsM"
    },
    {
        "title": "Science can answer moral questions - Sam Harris",
        "href": "https://www.youtube.com/watch?v=qn3ITqtGzQ8"
    },
    {
        "title": "How I fell in love with a fish - Dan Barber",
        "href": "https://www.youtube.com/watch?v=n9v-cDwEVDQ"
    },
    {
        "title": "Fresh water scarcity: An introduction to the problem - Christiana Z. Peppard",
        "href": "https://www.youtube.com/watch?v=otrpxtAmDAk"
    },
    {
        "title": "Inside OKCupid: The math of online dating - Christian Rudder",
        "href": "https://www.youtube.com/watch?v=m9PiPlRuy6E"
    },
    {
        "title": "Where we get our fresh water - Christiana Z. Peppard",
        "href": "https://www.youtube.com/watch?v=Pz6AQXQGupQ"
    },
    {
        "title": "How Curiosity got us to Mars - Bobak Ferdowsi",
        "href": "https://www.youtube.com/watch?v=weNKci8MrfI"
    },
    {
        "title": "The world needs all kinds of minds - Temple Grandin",
        "href": "https://www.youtube.com/watch?v=UKhg68QJlo0"
    },
    {
        "title": "How bacteria \"talk\" - Bonnie Bassler",
        "href": "https://www.youtube.com/watch?v=KXWurAmtf78"
    },
    {
        "title": "Four principles for the open world - Don Tapscott",
        "href": "https://www.youtube.com/watch?v=XvIg5MK-8yY"
    },
    {
        "title": "The historical audacity of the Louisiana Purchase - Judy Walton",
        "href": "https://www.youtube.com/watch?v=sMh8RCqJf9U"
    },
    {
        "title": "Make robots smarter - Ayanna Howard",
        "href": "https://www.youtube.com/watch?v=WejeIgo5cRc"
    },
    {
        "title": "How did trains standardize time in the United States? - William Heuisler",
        "href": "https://www.youtube.com/watch?v=UBpTohx1BOc"
    },
    {
        "title": "How polarity makes water behave strangely - Christina Kleinberg",
        "href": "https://www.youtube.com/watch?v=ASLUY2U1M-8"
    },
    {
        "title": "Our buggy moral code - Dan Ariely",
        "href": "https://www.youtube.com/watch?v=Gomg-PrQUTk"
    },
    {
        "title": "Our loss of wisdom - Barry Schwartz",
        "href": "https://www.youtube.com/watch?v=VYu0kMCxFEE"
    },
    {
        "title": "Earth's mass extinction - Peter Ward",
        "href": "https://www.youtube.com/watch?v=yzLCWrPhBLY"
    },
    {
        "title": "What if we could look inside human brains? - Moran Cerf",
        "href": "https://www.youtube.com/watch?v=sewhbmh0ECg"
    },
    {
        "title": "Life of an astronaut - Jerry Carr",
        "href": "https://www.youtube.com/watch?v=ZZyNwGD3XE0"
    },
    {
        "title": "In on a secret? That's dramatic irony - Christopher Warner",
        "href": "https://www.youtube.com/watch?v=RZFYuX84n1U"
    },
    {
        "title": "Parasite tales: The jewel wasp's zombie slave - Carl Zimmer",
        "href": "https://www.youtube.com/watch?v=PurpaN30Wn0"
    },
    {
        "title": "The coming neurological epidemic - Gregory Petsko",
        "href": "https://www.youtube.com/watch?v=XSb-pIloOFc"
    },
    {
        "title": "Do the green thing - Andy Hobsbawm",
        "href": "https://www.youtube.com/watch?v=M5qIdgE4ajA"
    },
    {
        "title": "Surviving a nuclear attack - Irwin Redlener",
        "href": "https://www.youtube.com/watch?v=tW7IgKJWtqk"
    },
    {
        "title": "Slowing down time (in writing & film) - Aaron Sitze",
        "href": "https://www.youtube.com/watch?v=iqAee-QsjMU"
    },
    {
        "title": "Network theory - Marc Samet",
        "href": "https://www.youtube.com/watch?v=eM1KaaTez0A"
    },
    {
        "title": "Rapid prototyping Google Glass - Tom Chi",
        "href": "https://www.youtube.com/watch?v=d5_h1VuwD6g"
    },
    {
        "title": "Learning from past presidents - Doris Kearns Goodwin",
        "href": "https://www.youtube.com/watch?v=KzSAFJBLyn4"
    },
    {
        "title": "Digging for humanity's origins - Louise Leakey",
        "href": "https://www.youtube.com/watch?v=zf83T6rdzmI"
    },
    {
        "title": "Losing everything - David Hoffman",
        "href": "https://www.youtube.com/watch?v=nqSLlS1WZmE"
    },
    {
        "title": "Your genes are not your fate - Dean Ornish",
        "href": "https://www.youtube.com/watch?v=5pfoa7j5vls"
    },
    {
        "title": "Is light a particle or a wave? - Colm Kelleher",
        "href": "https://www.youtube.com/watch?v=J1yIApZtLos"
    },
    {
        "title": "The \"bottom billion\" - Paul Collier",
        "href": "https://www.youtube.com/watch?v=4k1JlhniQFI"
    },
    {
        "title": "Write your story, change history - Brad Meltzer",
        "href": "https://www.youtube.com/watch?v=9LR7Vb6mqts"
    },
    {
        "title": "Can we domesticate germs? - Paul Ewald",
        "href": "https://www.youtube.com/watch?v=xCUyYIIG_gM"
    },
    {
        "title": "How to defeat a dragon with math - Garth Sundem",
        "href": "https://www.youtube.com/watch?v=H6syI3xiBBg"
    },
    {
        "title": "Questioning the universe - Stephen Hawking",
        "href": "https://www.youtube.com/watch?v=rZy6rpvq5Es"
    },
    {
        "title": "What Aristotle and Joshua Bell can teach us about persuasion - Conor Neill",
        "href": "https://www.youtube.com/watch?v=O2dEuMFR8kw"
    },
    {
        "title": "How to find the true face of Leonardo - Siegfried Woldhek",
        "href": "https://www.youtube.com/watch?v=4Ne7EYoCX_o"
    },
    {
        "title": "A plant's-eye view - Michael Pollan",
        "href": "https://www.youtube.com/watch?v=p54VVLSS6Qk"
    },
    {
        "title": "Underwater astonishments - David Gallo",
        "href": "https://www.youtube.com/watch?v=-Hi5muM44NE"
    },
    {
        "title": "Phenology and nature's shifting rhythms - Regina Brinker",
        "href": "https://www.youtube.com/watch?v=RNs3XpRmRfI"
    },
    {
        "title": "Activation energy: Kickstarting chemical reactions - Vance Kite",
        "href": "https://www.youtube.com/watch?v=D0ZyjpAin_Y"
    },
    {
        "title": "How we see color - Colm Kelleher",
        "href": "https://www.youtube.com/watch?v=l8_fZPHasdo"
    },
    {
        "title": "You are your microbes - Jessica Green and Karen Guillemin",
        "href": "https://www.youtube.com/watch?v=1X8p0vhsWRE"
    },
    {
        "title": "Tales of passion - Isabel Allende",
        "href": "https://www.youtube.com/watch?v=BXiY3lk5rbg"
    },
    {
        "title": "On exploring the oceans - Robert Ballard",
        "href": "https://www.youtube.com/watch?v=bOYIKJho18I"
    },
    {
        "title": "Detention or Eco Club: Choosing your future - Juan Martinez",
        "href": "https://www.youtube.com/watch?v=E0KahzQGHM0"
    },
    {
        "title": "Conserving our spectacular, vulnerable coral reefs - Joshua Drew",
        "href": "https://www.youtube.com/watch?v=TPmlD6demPk"
    },
    {
        "title": "How photography connects us - David Griffin",
        "href": "https://www.youtube.com/watch?v=m-UrpcSRVGk"
    },
    {
        "title": "The moral roots of liberals and conservatives - Jonathan Haidt",
        "href": "https://www.youtube.com/watch?v=8SOQduoLgRw"
    },
    {
        "title": "Redefining the dictionary - Erin McKean",
        "href": "https://www.youtube.com/watch?v=ov-Sh8UDnhU"
    },
    {
        "title": "Measuring what makes life worthwhile - Chip Conley",
        "href": "https://www.youtube.com/watch?v=1QUF5QfnIbc"
    },
    {
        "title": "See Yemen through my eyes - Nadia Al-Sakkaf",
        "href": "https://www.youtube.com/watch?v=3LK3ONKo-WM"
    },
    {
        "title": "The power of introverts - Susan Cain",
        "href": "https://www.youtube.com/watch?v=yVPeuvFn_lY"
    },
    {
        "title": "Breaking the illusion of skin color - Nina Jablonski",
        "href": "https://www.youtube.com/watch?v=tLsFl6QiFh4"
    },
    {
        "title": "TED Prize wish: Protect our oceans - Sylvia Earle",
        "href": "https://www.youtube.com/watch?v=pS-sfUHJaXI"
    },
    {
        "title": "Curiosity, discovery and gecko feet - Robert Full",
        "href": "https://www.youtube.com/watch?v=TlyvS1ckDZM"
    },
    {
        "title": "A tap dancer's craft - Andrew Nemr",
        "href": "https://www.youtube.com/watch?v=XzgT4xcFNNo"
    },
    {
        "title": "What is color? - Colm Kelleher",
        "href": "https://www.youtube.com/watch?v=UZ5UGnU7oOI"
    },
    {
        "title": "Why is there a \"b\" in doubt? - Gina Cooke",
        "href": "https://www.youtube.com/watch?v=YvABHCJm3aA"
    },
    {
        "title": "The demise of guys - Philip Zimbardo",
        "href": "https://www.youtube.com/watch?v=xA3j_btaz_0"
    },
    {
        "title": "A global culture to fight extremism - Maajid Nawaz",
        "href": "https://www.youtube.com/watch?v=UIzHuESemu4"
    },
    {
        "title": "Retrofitting suburbia - Ellen Dunham-Jones",
        "href": "https://www.youtube.com/watch?v=JHPcIDd676M"
    },
    {
        "title": "Situational irony: The opposite of what you think - Christopher Warner",
        "href": "https://www.youtube.com/watch?v=tqg6RO8c_W0"
    },
    {
        "title": "Solving the puzzle of the periodic table - Eric Rosado",
        "href": "https://www.youtube.com/watch?v=O-48znAg7VE"
    },
    {
        "title": "Inside a cartoonist's world - Liza Donnelly",
        "href": "https://www.youtube.com/watch?v=1c3AQT_Lex4"
    },
    {
        "title": "Radioactivity: Expect the unexpected - Steve Weatherall",
        "href": "https://www.youtube.com/watch?v=TJgc28csgV0"
    },
    {
        "title": "Folding way-new origami - Robert Lang",
        "href": "https://www.youtube.com/watch?v=UNdD5Kxdkpg"
    },
    {
        "title": "CERN's supercollider - Brian Cox",
        "href": "https://www.youtube.com/watch?v=u8C2Un6Gjhk"
    },
    {
        "title": "Seeing a sustainable future - Alex Steffen",
        "href": "https://www.youtube.com/watch?v=USRkS_WO4e4"
    },
    {
        "title": "Pizza physics (New York-style) - Colm Kelleher",
        "href": "https://www.youtube.com/watch?v=HGl3_92KW7I"
    },
    {
        "title": "How do cancer cells behave differently from healthy ones? - George Zaidan",
        "href": "https://www.youtube.com/watch?v=BmFEoCFDi-w"
    },
    {
        "title": "What makes a hero? - Matthew Winkler",
        "href": "https://www.youtube.com/watch?v=Hhk4N9A0oCA"
    },
    {
        "title": "Let's talk about sex - John Bohannon and Black Label Movement",
        "href": "https://www.youtube.com/watch?v=U42iLGDdu-E"
    },
    {
        "title": "High-tech art (with a sense of humor) - Aparna Rao",
        "href": "https://www.youtube.com/watch?v=kJLDl2uDNaA"
    },
    {
        "title": "The birth of a word - Deb Roy",
        "href": "https://www.youtube.com/watch?v=eeYkGsWtUVY"
    },
    {
        "title": "Shedding light on dark matter - Patricia Burchat",
        "href": "https://www.youtube.com/watch?v=bZW_B9CC-gI"
    },
    {
        "title": "How does work...work? - Peter Bohacek",
        "href": "https://www.youtube.com/watch?v=u6y2RPQw7E0"
    },
    {
        "title": "Dance vs. PowerPoint, a modest proposal - John Bohannon",
        "href": "https://www.youtube.com/watch?v=0nqhopRhju4"
    },
    {
        "title": "How did English evolve? - Kate Gardoqui",
        "href": "https://www.youtube.com/watch?v=kIzFz9T5rhI"
    },
    {
        "title": "DNA: The book of you - Joe Hanson",
        "href": "https://www.youtube.com/watch?v=aeAL6xThfL8"
    },
    {
        "title": "How algorithms shape our world - Kevin Slavin",
        "href": "https://www.youtube.com/watch?v=ENWVRcMGDoU"
    },
    {
        "title": "The beautiful math of coral - Margaret Wertheim",
        "href": "https://www.youtube.com/watch?v=soxS8VtMi9E"
    },
    {
        "title": "The beauty of data visualization - David McCandless",
        "href": "https://www.youtube.com/watch?v=5Zg-C8AAIGg"
    },
    {
        "title": "The genius of Mendeleev's periodic table - Lou Serico",
        "href": "https://www.youtube.com/watch?v=fPnwBITSmgU"
    },
    {
        "title": "Three anti-social skills to improve your writing - Nadia Kalman",
        "href": "https://www.youtube.com/watch?v=flthk8SNiiE"
    },
    {
        "title": "Would you weigh less in an elevator? - Carol Hedden",
        "href": "https://www.youtube.com/watch?v=2k-2IlJcaHg"
    },
    {
        "title": "Why videos go viral - Kevin Allocca",
        "href": "https://www.youtube.com/watch?v=R5BY_4FfbQs"
    },
    {
        "title": "How social media can make history - Clay Shirky",
        "href": "https://www.youtube.com/watch?v=ASZJE15E0SY"
    },
    {
        "title": "Does stress cause pimples? - Claudia Aguirre",
        "href": "https://www.youtube.com/watch?v=qz1FKi6z4Fc"
    },
    {
        "title": "Stroke of insight - Jill Bolte Taylor",
        "href": "https://www.youtube.com/watch?v=mYD7Y9CXeUw"
    },
    {
        "title": "An anti-hero of one's own - Tim Adams",
        "href": "https://www.youtube.com/watch?v=MEjgDeSnBMs"
    },
    {
        "title": "Dark matter: How does it explain a star's speed? - Don Lincoln",
        "href": "https://www.youtube.com/watch?v=sI23cwbbNqs"
    },
    {
        "title": "A needle in countless haystacks: Finding habitable worlds - Ariel Anbar",
        "href": "https://www.youtube.com/watch?v=qY1R0UBBZk0"
    },
    {
        "title": "How life came to land - Tierney Thys",
        "href": "https://www.youtube.com/watch?v=enfO5s0_uvM"
    },
    {
        "title": "The oddities of the first American election - Kenneth C. Davis",
        "href": "https://www.youtube.com/watch?v=4QnGjGgbmmw"
    },
    {
        "title": "Does your vote count? The Electoral College explained - Christina Greer",
        "href": "https://www.youtube.com/watch?v=W9H3gvnN468"
    },
    {
        "title": "Beware of nominalizations (AKA zombie nouns) - Helen Sword",
        "href": "https://www.youtube.com/watch?v=dNlkHtMgcPQ"
    },
    {
        "title": "A 3-minute guide to the Bill of Rights - Belinda Stutzman",
        "href": "https://www.youtube.com/watch?v=yYEfLm5dLMQ"
    },
    {
        "title": "A glimpse of teenage life in ancient Rome - Ray Laurence",
        "href": "https://www.youtube.com/watch?v=juWYhMoDTN0"
    },
    {
        "title": "Gerrymandering: How drawing jagged lines can impact an election - Christina Greer",
        "href": "https://www.youtube.com/watch?v=YcUDBgYodIE"
    },
    {
        "title": "Diagnosing a zombie: brain and behavior (Part two) - Tim Verstynen & Bradley Voytek",
        "href": "https://www.youtube.com/watch?v=XNjvipiJTjY"
    },
    {
        "title": "The Making of the American Constitution - Judy Walton",
        "href": "https://www.youtube.com/watch?v=uihNc_tdGbk"
    },
    {
        "title": "Diagnosing a zombie: Brain and body (Part one) - Tim Verstynen & Bradley Voytek",
        "href": "https://www.youtube.com/watch?v=dACNHRPdgqc"
    },
    {
        "title": "The city of walls: Constantinople - Lars Brownworth",
        "href": "https://www.youtube.com/watch?v=MNMoi5Af1SY"
    },
    {
        "title": "How inventions change history (for better and for worse) - Kenneth C. Davis",
        "href": "https://www.youtube.com/watch?v=0SMNYivhGsc"
    },
    {
        "title": "Sending a sundial to Mars - Bill Nye",
        "href": "https://www.youtube.com/watch?v=F-Atrlz-cSI"
    },
    {
        "title": "Rethinking thinking - Trevor Maber",
        "href": "https://www.youtube.com/watch?v=KJLqOclPqis"
    },
    {
        "title": "How does math guide our ships at sea? - George Christoph",
        "href": "https://www.youtube.com/watch?v=AGCUm_jWtt4"
    },
    {
        "title": "Describing the invisible properties of gas - Brian Bennett",
        "href": "https://www.youtube.com/watch?v=EHxdVtygP1g"
    },
    {
        "title": "The ABC's of gas: Avogadro, Boyle, Charles - Brian Bennett",
        "href": "https://www.youtube.com/watch?v=BY9VGS2eXas"
    },
    {
        "title": "The story behind your glasses - Eva Timothy",
        "href": "https://www.youtube.com/watch?v=G1KGUP2iKbE"
    },
    {
        "title": "How breathing works - Nirvair Kaur",
        "href": "https://www.youtube.com/watch?v=Kl4cU9sG_08"
    },
    {
        "title": "The twisting tale of DNA - Judith Hauck",
        "href": "https://www.youtube.com/watch?v=0_b80fHmuWw"
    },
    {
        "title": "The carbon cycle - Nathaniel Manning",
        "href": "https://www.youtube.com/watch?v=A4cPmHGegKI"
    },
    {
        "title": "Why do competitors open their stores next to one another? - Jac de Haan",
        "href": "https://www.youtube.com/watch?v=jILgxeNBK_8"
    },
    {
        "title": "The power of a great introduction - Carolyn Mohr",
        "href": "https://www.youtube.com/watch?v=j0_u-lourd0"
    },
    {
        "title": "What's invisible? More than you think - John Lloyd",
        "href": "https://www.youtube.com/watch?v=8EUy_82IChY"
    },
    {
        "title": "Making sense of spelling - Gina Cooke",
        "href": "https://www.youtube.com/watch?v=0mbuwZK0lr8"
    },
    {
        "title": "The art of the metaphor - Jane Hirshfield",
        "href": "https://www.youtube.com/watch?v=A0edKgL9EgM"
    },
    {
        "title": "What is chirality and how did it get in my molecules? - Michael Evans",
        "href": "https://www.youtube.com/watch?v=71GjsRnsoL8"
    },
    {
        "title": "Newton's 3 Laws, with a bicycle - Joshua Manley",
        "href": "https://www.youtube.com/watch?v=JGO_zDWmkvk"
    },
    {
        "title": "Magical metals, how shape memory alloys work - Ainissa Ramirez",
        "href": "https://www.youtube.com/watch?v=yR-6_lS9vts"
    },
    {
        "title": "How to think about gravity - Jon Bergmann",
        "href": "https://www.youtube.com/watch?v=lY3XV_GGV0M"
    },
    {
        "title": "Why the shape of your screen matters - Brian Gervase",
        "href": "https://www.youtube.com/watch?v=_1GQtAAxtX8"
    },
    {
        "title": "A clever way to estimate enormous numbers - Michael Mitchell",
        "href": "https://www.youtube.com/watch?v=0YzvupOX8Is"
    },
    {
        "title": "How big is a mole? (Not the animal, the other one.) - Daniel Dulek",
        "href": "https://www.youtube.com/watch?v=TEl4jeETVmg"
    },
    {
        "title": "An introduction to mathematical theorems - Scott Kennedy",
        "href": "https://www.youtube.com/watch?v=S0DSM-EkQE8"
    },
    {
        "title": "How taking a bath led to Archimedes' principle - Mark Salata",
        "href": "https://www.youtube.com/watch?v=ijj58xD5fDI"
    },
    {
        "title": "Greeting the world in peace - Jackie Jenkins",
        "href": "https://www.youtube.com/watch?v=-VwpxDCmTs4"
    },
    {
        "title": "What happens if you guess - Leigh Nataro",
        "href": "https://www.youtube.com/watch?v=3V2omKRX9gc"
    },
    {
        "title": "Capturing authentic narratives - Michele Weldon",
        "href": "https://www.youtube.com/watch?v=4mQN1hcFJwU"
    },
    {
        "title": "How fiction can change reality - Jessica Wise",
        "href": "https://www.youtube.com/watch?v=ctaPAm14L10"
    },
    {
        "title": "Logarithms, Explained - Steve Kelly",
        "href": "https://www.youtube.com/watch?v=zzu2POfYv0Y"
    },
    {
        "title": "The history of keeping time - Karen Mensing",
        "href": "https://www.youtube.com/watch?v=74I0M0RKNIE"
    },
    {
        "title": "Music as a language - Victor Wooten",
        "href": "https://www.youtube.com/watch?v=3yRMbH36HRE"
    },
    {
        "title": "How do nerves work? - Elliot Krane",
        "href": "https://www.youtube.com/watch?v=uU_4uA6-zcE"
    },
    {
        "title": "How big is infinity? - Dennis Wildfogel",
        "href": "https://www.youtube.com/watch?v=UPA3bwVVzGI"
    },
    {
        "title": "How Two Decisions Led Me to Olympic Glory - Steve Mesler",
        "href": "https://www.youtube.com/watch?v=imGfY8nb9jw"
    },
    {
        "title": "The Survival of the Sea Turtle",
        "href": "https://www.youtube.com/watch?v=t-KmQ6pGxg4"
    },
    {
        "title": "Electric Vocabulary",
        "href": "https://www.youtube.com/watch?v=MBRTR2dlwvA"
    },
    {
        "title": "The case against \"good\" and \"bad\" - Marlee Neel",
        "href": "https://www.youtube.com/watch?v=D5zDkW1thls"
    },
    {
        "title": "Calculating The Odds of Intelligent Alien Life - Jill Tarter",
        "href": "https://www.youtube.com/watch?v=6AnLznzIjSE"
    },
    {
        "title": "How Do Pain Relievers Work? - George Zaidan",
        "href": "https://www.youtube.com/watch?v=9mcuIc5O-DE"
    },
    {
        "title": "How to speed up chemical reactions (and get a date) - Aaron Sams",
        "href": "https://www.youtube.com/watch?v=OttRV5ykP7A"
    },
    {
        "title": "The wacky history of cell theory - Lauren Royal-Woods",
        "href": "https://www.youtube.com/watch?v=4OpBylwH9DU"
    },
    {
        "title": "The Key to Media's Hidden Codes - Ben Beaton",
        "href": "https://www.youtube.com/watch?v=oZXqORn0z4E"
    },
    {
        "title": "One is one ... or is it?",
        "href": "https://www.youtube.com/watch?v=EtclcWGG7WQ"
    },
    {
        "title": "How Life Begins in the Deep Ocean",
        "href": "https://www.youtube.com/watch?v=i_R7ouD8-Eo"
    },
    {
        "title": "Five fingers of evolution - Paul Andersen",
        "href": "https://www.youtube.com/watch?v=5NdMnlt2keE"
    },
    {
        "title": "Insults by Shakespeare",
        "href": "https://www.youtube.com/watch?v=vdCjKH5IKJ8"
    },
    {
        "title": "TED-Ed Website Tour",
        "href": "https://www.youtube.com/watch?v=JQDgE_eJGTM"
    },
    {
        "title": "Sex Determination: More Complicated Than You Thought",
        "href": "https://www.youtube.com/watch?v=kMWxuF9YW38"
    },
    {
        "title": "Exponential Growth: How Folding Paper Can Get You to the Moon",
        "href": "https://www.youtube.com/watch?v=AmFMJC45f1Q"
    },
    {
        "title": "Just How Small is an Atom?",
        "href": "https://www.youtube.com/watch?v=yQP4UJhNn0I"
    },
    {
        "title": "Why do Americans vote on Tuesdays?",
        "href": "https://www.youtube.com/watch?v=9WvoGlQ7zH8"
    },
    {
        "title": "The Secret Life of Plankton",
        "href": "https://www.youtube.com/watch?v=xFQ_fO2D7f0"
    },
    {
        "title": "The Real Origin of the Franchise - Sir Harold Evans",
        "href": "https://www.youtube.com/watch?v=Ie8qJuXYN7w"
    },
    {
        "title": "Poetic Stickup: Put the Financial Aid in the Bag",
        "href": "https://www.youtube.com/watch?v=iMGRpzf2RL8"
    },
    {
        "title": "Questions No One Knows the Answers to (Full Version)",
        "href": "https://www.youtube.com/watch?v=7SWvDHvWXok"
    },
    {
        "title": "Symbiosis: A surprising tale of species cooperation - David Gonzales",
        "href": "https://www.youtube.com/watch?v=2AM3ARs9MMg"
    },
    {
        "title": "How simple ideas lead to scientific discoveries",
        "href": "https://www.youtube.com/watch?v=F8UFGu2M2gM"
    },
    {
        "title": "Stories: Legacies of who we are - Awele Makeba",
        "href": "https://www.youtube.com/watch?v=5UD0RjZdUHk"
    },
    {
        "title": "Deep ocean mysteries and wonders - David Gallo",
        "href": "https://www.youtube.com/watch?v=Uqly8ERIkHM"
    },
    {
        "title": "Introducing TED-Ed: Lessons Worth Sharing",
        "href": "https://www.youtube.com/watch?v=FfJ5XG5i2aw"
    },
    {
        "title": "The Power of Simple Words - Terin Izil",
        "href": "https://www.youtube.com/watch?v=Dz8E8UOBFJQ"
    },
    {
        "title": "Questions No One Knows the Answers to",
        "href": "https://www.youtube.com/watch?v=C9vnuaPGxrg"
    },
    {
        "title": "Why Can't We See Evidence of Alien Life?",
        "href": "https://www.youtube.com/watch?v=I2apGYUX7Q0"
    },
    {
        "title": "How pandemics spread",
        "href": "https://www.youtube.com/watch?v=UG8YbNbdaco"
    },
    {
        "title": "How many universes are there? - Chris Anderson",
        "href": "https://www.youtube.com/watch?v=a1bWKZFP2Tc"
    },
    {
        "title": "Evolution in a Big City",
        "href": "https://www.youtube.com/watch?v=ckGB5lHyzME"
    },
    {
        "title": "The Cockroach Beatbox",
        "href": "https://www.youtube.com/watch?v=tr4gWi9Jf6k"
    },
    {
        "title": "How Containerization Shaped the Modern World",
        "href": "https://www.youtube.com/watch?v=Gn7IoT_WSRA"
    },
   
]