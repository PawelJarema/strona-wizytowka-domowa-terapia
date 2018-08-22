const bodyParser = require('body-parser');

var express = require('express'),
	app = express(),
	config = require('./config/config'),
	user = '';

app.content = {
	title: 'Domowa Terapia. Opieka nad osobami starszymi, niepełnosprawnymi i leżącymi',
	description: 'Opieka nad seniorem i osobami niepełnosprawnymi w ramach długoterminowej terapii domowej z indywidualnym programem. Krok po kroku przywrócimy radość i sprawność osoby leżącej. Opieka nad seniorem odbywa się w domu osoby chorej.',
	url: 'www.domowa-terapia.pl',
	photoPath: '/public/assets/thumbnails/',
	videos: [
		{
			src: 'https://www.youtube.com/embed/thPh_C4onwU',
			width: 560,
			height: 315
		},
		{
			src: 'https://www.youtube.com/embed/2_Zkmm2Nmv4',
			width: 560,
			height: 315
		},
		{
			src: 'https://www.youtube.com/embed/rZcrGPwLWiI',
			width: 560,
			height: 315
		},
		{
			src: 'https://www.youtube.com/embed/VgtvTsydBOw',
			width: 560,
			height: 315
		}
	],
	questions: [
		{
			title: 'Jakie są objawy depresji u osoby leżącej?',
			text: 'Objawy depresji mogą być bardzo różne. Najczęstszymi znamionami będą brak apetytu, niechęć do rozmowy lub jakiegokolwiek kontaktu, wzmożona senność lub zupełna bezsenność, apatia z wybuchami złości, światłowstręt.'
		},{
			title: 'Jak wygląda opieka nad osobą niepełnosprawną, leżącą w domu?',
			text: 'Jeśli osoba leży, bardzo ważna jest częsta zmiana pozycji w celu zapobiegania odleżynom. Odzież powinna "oddychać" - najlepsza będzie bawełniana piżama. Musimy pamiętać, aby często wietrzyć pomieszczenie, w którym przebywa chory. Jeśli osoba jest po urazie, bądź z innych powodów nie może się samodzielnie poruszać, musimy pamiętać o odpowiednim karmieniu i dopajaniu. Jeśli są kłopoty z przełykaniem lub pacjent ma skłonności do zachłyśnięć, zamiast wody lub herbaty lepiej podawać kisiel. Jeśli jest trudność przy piciu z kubeczka, można podawać płyn poprzez "Żanetę" (strzykawkę dostępną w aptekach). Do innych zabiegów pielęgnacyjnych, przy których będziemy pomagać choremu, należy mycie, przebieranie oraz wspomaganie w czynnościach fizjologicznych.'
		},{
			title: 'Jak wygląda pielęgnacja osoby leżącej?',
			text: 'Wszystkie metody opieki nad osobą leżącą przybliżę Państwu na pierwszym spotkaniu. Omówimy metody mycia, ubierania i karmienia. W przypadku seniorów oraz osób szczególnie wymagających, omówimy takie zagadnienia jak oklepywanie pleców osoby starszej, zmiana basenu i pieluch dla osób o dużej wadze ciała. Opowiem Państwu jak umyć głowę osobie leżącej, jak przeciwdziałać odleżynom.'
		},{
			title: 'Czy takie formy rehabilitacji jak arteterapia, kinezyterapia czy horikuloterapia można praktykować w warunkach przyłóżkowych ?',
			text: 'Oczywiście, przy pewnych modyfikacjach, można stosować te metody. Pozwalają one przeciwdziałać depresji, atrofii mięśni i funkcji poznawczych. Budzą poczucie sprawstwa, celu, pozwalają odkrywać talenty, przywracają radość życia i uśmiech na twarzy :)'
		},{
			title: 'Jak zamówić bezpłatne konsultacje?',
			text: 'Wystarczy się ze mną skontaktować i umówić się na pierwsze spotkanie.',
			link: {
				navto: 'Umów się',
				text: 'Umów się'
			}
		},{
			title: 'Jak wygląda pierwsze spotkanie?',
			text: 'Pierwsze spotkanie jest zawsze spotkaniem bezpłatnym. Jego głównym celem jest poznanie potrzeb i możliwości pacjenta oraz przybliżenie Państwu podstawowych metod opieki nad chorym leżącym w łóżku. Na podstawie pierwszej wizty będę mogła ułożyć indywidualny plan terapii dla chorego, a następnie - wprowadzić go w życie - jeśli zdecydują się Państwo na trapię.',
			link: {
				navto: 'Umów się',
				text: 'Umów się'
			}
		},{
			title: 'Czy dzwoni Pani do klienta?',
			text: 'Dzwonię tylko na wyraźne życzenie. Nigdy nie będę kontaktować się z Państwem bez Państwa zgody.'
		},{
			title: 'Ile kosztuje godzinne wynajęcie terapeutki/opiekunki?',
			text: 'Koszt mieści się w przedziale od 20zł do 80zł na godzinę. Wszystko zależy od stanu pacjenta i tego, co ustalimy po pierwszej wizycie. Jeśli osoba chora będzie wymagała zarówno terapii, jak wszechstronnej opieki medycznej, cena będzie wyższa. Przy zamówieniu większej ilości godzin, cena będzie progresywnie niższa.',
			link: {
				navto: 'Umów się',
				text: 'Umów się na bezpłatne konsultacje'
			}
		},{
			title: 'Czy Państwa dane są utajnone a przebieg terapii - objęty tajemnicą ?',
			text: 'Tak, wszystkie Państwa dane, dane osoby chorej oraz przebieg terapii - objęte będą ścisłą tajemnicą.'
		},{
			title: 'Czy opieka obejmuje osoby po udarze?',
			text: 'Tak. Zaopiekuję się osobą po udarze, seniorem, osobą niepełnosprawną. Mam też doświadczenie w opiece nad osobami z chorobami psychicznymi oraz osobami w nałogach.',
			link: {
				navto: 'Umów się',
				text: 'Umów się'
			}
		}
	],
	gallery: [
		{
			title: 'Opieka nad seniorami i ludoterapia',
			images: [
				{
					title: 'Poranna kawa',
					caption: 'Seniorzy zbierają siłę do zajęć.',
					src: '20180813_091101.jpg'
				},{
					title: 'Przed rozpoczęciem terapii',
					caption: 'Przegląd porannej prasy.',
					src: '20180813_091140.jpg'
				},{
					title: 'Rozpoczęcie terapii',
					caption: 'Seniorzy przy pracy.',
					src: '20180813_091107.jpg'
				},{
					title: 'Dzień Babci i Dziadka',
					caption: 'Seniorzy oglądają występ przygotowany przez grupę teatralną specjalnie dla nich z tej okazji.',
					src: '20170630_125330.jpg'
				}
			]
		},
		{
			title: 'Choreoterapia i muzykoterapia - grupa teatralna',
			images: [
				{
					title: 'Świetlica społeczna',
					caption: 'Aktorzy grupy teatralnej zbierają pozytywną energię przed występem dla seniorów. Choreoterapia usprawnia ruchowo, wzmacnia pamięć i pewność siebie. Zbliża ludzi.',
					src: '20171123_155914.jpg'
				},{
					title: 'Po występie',
					caption: 'Grupa zadowolona z reakcji publiczności.',
					src: '20171123_160102.jpg'
				},{
					title: 'Gminny Ośrodek Kultury',
					caption: 'Tanczerze występują przed seniorami. Choreoterapia wszechstronnie usprawnia, do tego uwalnia ogromne pokłady radości.',
					src: '20171124_163505.jpg'
				},{
					title: 'Przedszkole',
					caption: 'Przedstawienie z okazji dnia dziecka. Dzieci czekają na występ.',
					src: '20180621_100419.jpg'
				},{
					title: 'Przedstawienie "Rzepka"',
					caption: 'Grupa teatralna występuje z przedstawieniem wg. wiersza Juliana Tuwima. Dziadek Sadzi rzepkę w ogrodzie.',
					src: '20180621_100453.jpg'
				},{
					title: '"Rzepka"',
					caption: 'Scena środkowa. Przyjaciele pomagają w wyciągnięciu Rzepki.',
					src: '20180621_100858.jpg'
				},{
					title: 'Finał przedstawienia',
					caption: 'Taniec i ukłony w kierunku publiczności.',
					src: '20180621_101202.jpg'
				},{
					title: 'Autorskie przedstawienie "Choinka"',
					caption: 'Występ bożonarodzeniowy. Czerwony Kapturek wraz z postaciami znanymi z bajek ratuje Choinkę przed złym urokiem.',
					src: 'Kolnik_Warcz_3295405063569002820_n.jpg'
				},{
					title: '"Choinka"',
					caption: 'Postacie z bajek okrążają Choinkę, ofiarowując swoje najcenniejsze skarby.',
					src: 'Kolnik_Warcz_7602935358967266633_n.jpg'
				},{
					title: '"Choinka"',
					caption: 'Udało się uratować święta. Choinka zaczyna wzrastać. Publiczność bije brawo.',
					src: 'Kolnik_Warcz_9110011933979357591_n.jpg'
				},{
					title: 'Szkoła Podstawowa',
					caption: 'Grupa teatralna przyjechała na zaproszenie dyrekcji lokalnej Szkoły Podstawowej',
					src: 'Lichnowy_5409745855394901093_n.jpg'
				},{
					title: 'Koniec przedstawienia',
					caption: 'Oklaski, ukłony i uśmiechnięci aktorzy.',
					src: 'Lichnowy_7887496070641242935_n.jpg'
				},{
					title: 'Występy w Domu Seniora',
					caption: 'Kolejna odsłona "Rzepy", tym razem w Domu Seniora.',
					src: 'Pszczółki_4323165873800887578_n.jpg'
				},{
					title: 'Dom Seniora',
					caption: 'Rzepkę zagrała nowa aktorka. Dziadek zasadził Rzepkę w ogrodzie.',
					src: 'Pszzółki_6262218679923058295_n.jpg'
				},{
					title: 'Dom Kultury',
					caption: 'Kolejna odsłona sztuki w nowym miejscu. Uczestnicy zajęć w lokalnym domu kultury oglądają występy naszej grupy.',
					src: 'Szkoła_Łacińska_Malbork_6497122750418394376_n.jpg'
				},{
					title: 'Aktorzy w strojach',
					caption: 'Nasi aktorzy w nowych strojach przygotowują się do następnego występu.',
					src: '20161125_091544.jpg'
				},{
					title: 'Ćwiczenia',
					caption: 'Ćwiczenia dramy na pracowni w ramach prób grupy teatralnej. Aktorzy pozują do kamery',
					src: '20170510_111517.jpg'
				},{
					title: 'Przedstawienie "Lokomotywa"',
					caption: 'Występ zorganizowany na terenie lokalnego Warsztatu Terapii Zajęciowej. Aktorzy przedstawiają luźną adaptację "Lokomotywy" Juliana Tuwima.',
					src: '20170629_104834.jpg'
				},{
					title: 'Nasi Aktorzy',
					caption: 'Pauza w trakcie próby. Nasi aktorzy wyrażają swój entuzjazm.',
					src: '20180614_132820.jpg'
				}
			]
		},
		{
			title: 'Zajęcia dla osób niepełnosprawnych',
			images: [
				{
					title: 'Warsztaty bibliotekarskie',
					caption: 'Biblioterapia. Rysunki sporządzane były do scen wiersza.',
					src: '20161109_112528.jpg'
				},{
					title: 'Warsztaty florystyczne',
					caption: 'Tworzymy stroiki i palmy z okazji zbliżającego się Święta Wielkiej Nocy.',
					src: '20170413_095851.jpg'
				},{
					title: 'Warsztaty florystyczne',
					caption: 'Uczestnicy w skupieniu dobierają żywe gałązki do swoich kompozycji.',
					src: '20170413_095859.jpg'
				},{
					title: 'Warsztaty z plakatu',
					caption: 'Plakat grupowy. Uczesnicy uczą się wyrażać swoje uczucia z pomocą technik artystycznych.',
					src: '20170511_101401.jpg'
				},{
					title: 'Warsztaty z plakatu',
					caption: 'Praca przebiega w harmonii.',
					src: '20170511_101639.jpg'
				},{
					title: 'Nauka pierwszej pomocy',
					caption: 'Masaż serca.\nW roli poszkodowanego wystąpił fantom.',
					src: '20171024_104757.jpg'
				},{
					title: 'Warsztaty florystyczne',
					caption: 'Z okazji zbliżającego się Święta Zmarłych, uczestnicy komponują wieńce, wiązanki i stroiki.',
					src: '20171030_095740.jpg'
				},{
					title: 'Warsztaty florystyczne',
					caption: 'Uczestnicy dumnie prezentują swoje dzieło.',
					src: '20171030_101707.jpg'
				},{
					title: 'Warsztaty florystyczne',
					caption: 'Wiązanki skomponowane przez uczestników warsztatu ułożyliśmy na stole. Prace zostały złożone na grobach ku pamięci zmarłym członkom rodzin.',
					src: '20171030_094740.jpg'
				},{
					title: 'Warsztaty rysunku',
					caption: 'Szkice postaci, zwierząt i stworzeń mitycznych.',
					src: '20171105_194231.jpg'
				},{
					title: 'Warsztaty ceramiczne',
					caption: 'Uczestnicy malują na talerzykach farbami do ceramiki.',
					src: '20180312_111737.jpg'
				},{
					title: 'Zajęcia integracyjne',
					caption: 'Goście wraz z osobami niepełnosprawnymi bydują ściany z plastikowych kubeczków. Wspólna praca łączy i pozwala zbudować pozytywne uczucia.',
					src: '20180418_111803.jpg'
				}
			]
		},
		{
			title: 'Arteterapia - wyroby plastyczne',
			images: [
				{
					title: 'Młyn wodny z elementów drewnianych',
					caption: 'Młyn wodny na makiecie. Elementy budowli wykonano z ręcznie wyciętej sklejki.',
					src: '20180711_075421.jpg'
				},{
					title: 'Młyn',
					caption: 'Makieta z młynem.',
					src: '20180711_075411.jpg'
				},{
					title: 'Motyl z drewna',
					caption: 'Rękodzieło ze sklejki. Motyl wycinany ażurowo.',
					src: '20180711_075431.jpg'
				},{
					title: 'Motyle',
					caption: 'Część motyli jest malowana i zdobiona wypalarką do drewna.',
					src: '20180711_075439.jpg'
				},{
					title: 'Malowane motyle',
					caption: 'Malowane motyle.',
					src: '20180615_132100.jpg'
				},{
					title: 'Motyl',
					caption: 'Motylek ręcznie pomalowany.',
					src: '20180615_125648.jpg'
				},{
					title: 'Ekspozycja prac WTZtu',
					caption: 'Prace uczestników Warsztatu Terapii Zajęciowej.',
					src: '20180711_152138.jpg'
				},{
					title: 'Witraż',
					caption: 'Anioł wykonany ręcznie ze szkła witrażowego.',
					src: '20180611_130857.jpg'
				},{
					title: 'Stroiki świąteczne',
					caption: 'Wykonane w dużej większości z darów natury przez osoby niepełnosprawne. Praca daje radość, rozwija wyobraźnię i poczucie estetyki.',
					src: '20161121_135320.jpg'
				},{
					title: 'Zabawki',
					caption: 'Uszyte w ramach terapii. Zajączki wycięto ze sklejki. Ręczne szycie zabawek usprawnia manualnie.',
					src: '20170303_074655.jpg'
				},{
					title: 'Ekspozycja wyrobów',
					caption: 'Wszystko wykonali uczestnicy Warsztatów Terapii Zajęciowej',
					src: '20170330_130846.jpg'
				},{
					title: 'Malowana antylopa',
					caption: 'Antylopa namalowana gwaszem. Arteterapia bardzo rozwija poczucie estetyki.',
					src: '20171221_205334.jpg'
				},{
					title: 'Antylopa',
					caption: 'Ta sama antylopa namalowana przez inną osobę.',
					src: '20171221_205348.jpg'
				},{
					title: 'Statuetki brydżowe',
					caption: 'Nagrody dla uczestników turnieju brydżowego. Wspólna praca uczestników warsztatu terapii zajęciowej. Projekt autorski.',
					src: '20180302_124604.jpg'
				},{
					title: 'Statuetka brydżowa',
					caption: 'Nagroda za zajęcie drugiego miejsca.',
					src: '20180302_124610.jpg'
				},{
					title: 'Statuetka',
					caption: 'Nagroda za zajęcie pierwszego miejsca.',
					src: '20180302_124614.jpg'
				},{
					title: 'Kolejna statuetka',
					caption: 'Nagroda za trzecie miejsce.',
					src: '20180302_124619.jpg'
				},{
					title: 'Talerzyki zdobione w ramach terapii',
					caption: 'Pomalowane ręcznie farbkami do szkła.',
					src: '20180315_083148.jpg'
				},{
					title: 'Paw',
					caption: 'Ozdoba ogrodowa wykonana ze sklejki.',
					src: '20180522_145730.jpg'
				},{
					title: 'Prace wykonane przez osoby niepełnosprawne',
					caption: 'Wykonane w ramach terapii i przygotowania do pracy manualnej.',
					src: '20180604_103651.jpg'
				},{
					title: 'Aniołki ze sznurka',
					caption: 'Wykonane z pomocą osób niepełnosprawnych, ze sznurka, drutu i kleju.',
					src: '20180604_103720.jpg'
				},{
					title: 'Aniołki',
					caption: 'Terapia manualna usprawnia dłonie i poprawia zdolność koncentracji.',
					src: '20180604_103736.jpg'
				},{
					title: 'Aniołki z gliny',
					caption: 'Ulepione przez uczestników terapii, szkliwione i wypalone.',
					src: 'DSCF2744.jpg'
				},{
					title: 'Wyroby z gliny',
					caption: 'Lepienie z gliny ma cenne właściwości terapeutyczne. Uspakaja i pozwala podnieść sprawność dłoni po urazie lub długim zastoju.',
					src: 'DSCF2759.jpg'
				},{
					title: 'Odlewy z gipsu',
					caption: 'Uczestnicy warsztatów malują odlewy farbkami.',
					src: 'DSCF2778.jpg'
				},{
					title: 'Aniołki ze sklejki',
					caption: 'Technika mieszana. Widoczną w tle mozajkę parapetową udało się wykonać dzięki pomocy podopiecznych.',
					src: 'DSCF2788.jpg'
				},{
					title: 'Kompozycja ogrodowa',
					caption: 'Wóz i jeżyk wykonany na Warsztatach Terapii Zajęciowej.',
					src: 'DSCF2827.jpg'
				},{
					title: 'Wykonane przez seniorów ozdoby',
					caption: 'Ozdoby z okazji święta wykonane przez seniorów w ramach terapii.',
					src: 'DSCF2856.jpg'
				},{
					title: 'Naczynia gliniane',
					caption: 'Świeżo ulepione naczynia są owocem udziału w warsztatach ceramicznych.',
					src: '20171117_132045.jpg'
				},{
					title: 'Hipoterapia',
					caption: 'Koń ulepiony z gliny w stanie surowym. Niestety, póki nie podrośnie, do hipoterapii się nie nada.',
					src: '20171116_155329.jpg'
				},{
					title: 'Kształty',
					caption: 'Różyczki z gliny.',
					src: '20171116_155353.jpg'
				},{
					title: 'Listek',
					caption: 'Fakturowany, z odciśniętymi żyłkami.',
					src: '20171117_132423.jpg'
				},{
					title: 'Kura',
					caption: 'Kura nioska z gliny.',
					src: '20171117_151756.jpg'
				},{
					title: 'Arteterapia',
					caption: 'Wesoły tygrysek na tależyku.',
					src: '20180111_143026.jpg'
				},{
					title: 'Anioł ze sklejki',
					caption: 'Malowany w ramach terapii przez uczestniczkę ŚDSu.',
					src: '20170920_193719.jpg'
				},{
					title: 'Kwiaty na meblach',
					caption: 'Terapia objęła renowację pracowni.',
					src: '20180710_100836.jpg'
				},{
					title: 'Kwiaty',
					caption: 'Meble zostały odnowione w artystycznym stylu.',
					src: '20180710_100843.jpg'
				},{
					title: 'Kolejna odsłona',
					caption: 'Meble odnowione na Warsztatach Terapii Zajęciowej.',
					src: '20180710_100855.jpg'
				},{
					title: 'Listki',
					caption: 'Ręcznie malowane meble.',
					src: '20180710_123409.jpg'
				},{
					title: 'Piękne kwiaty',
					caption: 'Malowane meble tworzą przytulną atmosferę.',
					src: '20180710_123413.jpg'
				},{
					title: 'Niebieskie kwiaty',
					caption: 'Kwiaty na odnowionych meblach.',
					src: '20180710_150519.jpg'
				},{
					title: 'Rezultat odnowy',
					caption: 'Meble prezentują się znakomicie.',
					src: '20180711_150919.jpg'
				},{
					title: 'Malowane szafki',
					caption: 'Dowód na to, że terapia przynosi także bardzo praktyczne skutki.',
					src: '20180711_152215.jpg'
				},{
					title: 'Kompozycja osoby niepełnosprawnej',
					caption: 'Niejeden współczesny artysta mógłby pozazdrościć. Obrazek wykonano z plasteliny, która jest świetnym zastępnikiem gliny w warunkach domowych.',
					src: '20180711_152254.jpg'
				}
			]
		},
		{
			title: 'Horikuloterapia i ergoterapia',
			images: [
				{
					title: 'Pielęgnacja ogrodu w ramach horikuloterapii',
					caption: 'Praca w ogrodzie wzmacnia fizycznie i rozwija poczucie sprawstwa. Kontakt z roślinami ma działanie uspokajające. Pozwala dostrzec efekty pracy.',
					src: '20170714_130952.jpg'
				},{
					title: 'Pielęgnacja roślin doniczkowych',
					caption: 'Pielęgnacja roślin doniczkowych sprawdza się w terapii domowej. Seniorzy chętnie opiekują się ogródkami balkonowymi. Można rozważyć też zakup drzewka bonsai.',
					src: '20180515_125357.jpg'
				},{
					title: 'Pelargonie',
					caption: 'Kwiaty występują w różnych odmianach barw.',
					src: '20180515_125400.jpg'
				},{
					title: 'Czerwona pelargonia',
					caption: 'Pelargonia w doniczce.',
					src: '20180515_125406.jpg'
				},{
					title: 'Kwiaty w skrzynce',
					caption: 'Skrzynki po owocach zostały użyte do zasadzenia kwiatów.',
					src: '20180515_125430.jpg'
				},{
					title: 'Kwiaty',
					caption: 'Kwiaty uprawiane w skrzynkach.',
					src: '20180515_125436.jpg'
				},{
					title: 'Kwiaty',
					caption: 'Troska podopiecznych zaowocowała. Piękny wynik pracy.',
					src: '20180515_125447.jpg'
				}
			]
		}
	]
};

function autoPopulateGallery() {
	const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
	var fileCount = 0, catNum = 0;

	require('fs').readdirSync(photoFolder).forEach(file => {

		var catName = '';

		if (fileCount % 5 == 0) {
			catNum++;
			catName = 'Subtitle ' + catNum;
			app.content.gallery.push({ title: catName, images:[] });
		}

		fileCount++;

		app.content.gallery[catNum - 1].images.push({
			title: 'Image title ' + fileCount,
			caption: lorem,
			src: '/public/assets/thumbnails/' + file
		});
	});
};

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
	res.render('index', { app });
});

app.get('/dziekuje', (req, res) => {
	res.render('thankyou', { user });
});

app.post('/wyslij', (req, res) => {
	var name = user = req.body.name,
		contact = req.body.contact,
		message = req.body.message,
		subject = 'NOWY KLIENT!',
		message = name + ' (' + contact + '): ' + message;

		var config = require('./config/config'),
			send = require('gmail-send')({
			user: config.gmail.user,
			pass: config.gmail.pass,
			to: config.gmail.to,
			subject: subject,
			text: message
		})({});

		res.redirect('/dziekuje');
});

app.listen(8080, () => {
	console.log('Server active');
});
 