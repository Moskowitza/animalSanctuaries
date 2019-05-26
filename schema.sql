-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS AnimalSan_db;
-- Creates the "blogger" database --
CREATE DATABASE AnimalSan_db;
/*
-- Query: SELECT * FROM AnimalSan_db.AnimalSanLists
LIMIT 0, 1000

-- Date: 2018-07-02 15:13
*/
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(1,'Ironwood Pig Sanctuary','http://www.ironwoodpigs.org/images/logo.gif','Arizona','520-579-8847','ironwoodpigs@yahoo.com','34656 E Crystal Visions Rd, Marana, AZ 85658','http://www.ironwoodpigs.org/','https://www.facebook.com/IronwoodPigSanctuary','https://www.instagram.com/IronwoodPigSanctuary','','','https://www.paypal.com/donate/?token=dFkY_5DHWyz1Lfe_chGIDZ-kx8aft72AemJFJ89pKNkdYWnbG-e7BAj6mWUE9o0G9VRxS0&country.x=US&locale.x=US','http://www.ironwoodpigs.org/volunteer.html','http://www.ironwoodpigs.org/outreach.html','','http://www.ironwoodpigs.org/pictures.html','','','2018-07-02 16:53:50','2018-07-02 16:53:50');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(2,'Whisper’s Sanctuary','http://www.rrheartranch.com/sitebuilder/images/index.html-3.png','Arizona','520-455-5424','toni@rrheartranch.com','2160 E. Fry Blvd, #342, Sierra Vista, AZ 85635','http://www.rrheartranch.com/','https://www.facebook.com/WhispersSanctuary/','','','','https://www.paypal.com/webapps/shoppingcart?flowlogging_id=35fc0c69678c7&mfid=1529877150330_35fc0c69678c7#/checkout/openButton','','','','http://www.rrheartranch.com/Horses.html','','','2018-07-02 17:40:24','2018-07-02 17:40:24');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(3,'Animal Acres','https://pbs.twimg.com/profile_images/440957631226580992/Pk-bFWfT_400x400.jpeg','California','607-583-2225','info@farmsanctuary.org','5200 Escondido Canyon Road, Acton, CA 93510','https://www.farmsanctuary.org/the-sanctuaries/los-angeles-ca/','https://www.facebook.com/farmsanctuary','https://www.instagram.com/farmsanctuary/','https://twitter.com/farmsanctuary','https://www.youtube.com/user/farmsanctuary1','','https://www.farmsanctuary.org/get-involved/jobs-intern-volunteer/volunteer/southern-california-volunteer-opportunities/','https://www.farmsanctuary.org/the-sanctuaries/los-angeles-ca/tours/','','','https://www.farmsanctuary.org/events/','','2018-07-02 17:41:52','2018-07-02 17:41:52');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(4,'Animal Place Rescue Ranch','http://animalplace.org/wp-content/uploads/2016/11/Whitelogo.png','California','530-477-1757','info@animalplace.org','17314 McCourtney Road, Grass Valley, CA 95949','http://animalplace.org/','https://www.facebook.com/animalplace/','http://instagram.com/_animalplace','','','','','','','','','','2018-07-02 17:43:38','2018-07-02 17:43:38');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(5,'Farm Sanctuary ','https://pbs.twimg.com/profile_images/440957631226580992/Pk-bFWfT_400x400.jpeg','California','607-583-2225','info@farmsanctuary.org','5200 Escondido Canyon Road, Acton, CA 93510','http://www.farmsanctuary.org/the-sanctuaries/orland-ca/tours/','https://www.facebook.com/farmsanctuary','https://www.instagram.com/farmsanctuary/','https://twitter.com/farmsanctuary','https://www.youtube.com/user/farmsanctuary1','','','','','https://www.farmsanctuary.org/the-sanctuaries/rescued-animals/2018-rescues/','','','2018-07-02 17:45:09','2018-07-02 17:45:09');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(6,'Happy Hen Chicken Rescue','https://static.wixstatic.com/media/8aa558_035b2b01333749c883114a55096e8fde~mv2.jpg/v1/crop/x_0,y_54,w_854,h_749/fill/w_204,h_179,al_c,q_80,usm_0.66_1.00_0.01/8aa558_035b2b01333749c883114a55096e8fde~mv2.webp','California','805-458-6102','sherstinr@yahoo.com','Happy Hen Animal Sanctuary 3940-7 Broad St PMB #215 San Luis Obispo, CA 93401','https://www.happyhen.org/','','','','','https://www.happyhen.org/donate-monthly','','','','','','','2018-07-02 17:46:19','2018-07-02 17:46:19');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(7,'Flip Side Sanctuary','http://www.flipsidesanctuary.org/index.html','California','','info@flipsidesanctuary.org','Flip Side Sanctuary Roblar rd, 94952 Petaluma, United States','http://flipsidesanctuary.org/','https://www.facebook.com/flipsidesanctuary?fref=ts','https://instagram.com/flip_side_sanctuary/','','','http://www.flipsidesanctuary.org/donate.html','http://www.flipsidesanctuary.org/volunteer.html','','http://www.preetirangsanctuary.org/our-animal-family/','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(8,'Harvest Home Animal Sanctuary (Stockton)','http://harvesthomesanctuary.org/wp-content/uploads/2014/05/cropped-main_logo_notext2.jpg','California','(209) 244-7174','info@harvesthomesanctuary.org','Harvest Home Animal Sanctuary P.O. Box 998 French Camp, CA 95231','http://harvesthomesanctuary.org/','http://www.facebook.com/harvesthome','','https://twitter.com/HarvestHome','http://www.youtube.com/harvesthomeCA','http://harvesthomesanctuary.org/how-you-can-help/','http://harvesthomesanctuary.org/volunteer/','http://harvesthomesanctuary.org/visit-us/','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(9,'PreetiRang Sanctuary (Dixon)','http://www.preetirangsanctuary.org/','California','','preetirangsanctuary@gmail.com','Preetirang Sanctuary, Dixon, CA 95620','http://www.preetirangsanctuary.org/','https://www.facebook.com/Preetirang-Sanctuary-408482672581831/?fref=ts/','https://www.instagram.com/preetirangsanctuary/?hl=en','','https://www.youtube.com/user/PreetiRangSanctuary','http://www.preetirangsanctuary.org/sponsorship/','','','http://www.preetirangsanctuary.org/local-information/','https://www.paypal.com/donate/?token=_nkIay0KpbJlHcFTu1wkOqQum9bX3EmDPYWpNjzL2ndmf4KoEzQqf2iqhjaZjAlR3Z6d6W&country.x=US&locale.x=','https://www.sweetfarm.org/news/','http://www.preetirangsanctuary.org/newsblog/','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(10,'Sweet Farm (Half Moon Bay)','https://www.sweetfarm.org/','California','','INFO@SWEETFARM.ORG','131 Tunitas Creek Road Half Moon Bay, CA 94019','http://sweetfarm.org/','http://www.facebook.com/SweetFarmCA','http://instagram.com/thesweetfarm','https://twitter.com/TheSweetFarm','','https://sweetfarm.networkforgood.com/projects/48399-sweet-farm-annual-fund','https://www.sweetfarm.org/volunteer/','','https://www.sweetfarm.org/visit/','https://sweetfarm.networkforgood.com/projects/48399-sweet-farm-annual-fund','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(11,'The Gentle Barn (Santa Clarita)','https://www.gentlebarn.org/assets/components/gb/img/logo-gb2017.png','California','661.252.2440','media@gentlebarn.org','The Gentle Barn Foundation 15825 Sierra Highway Santa Clarita, CA 91390','http://www.gentlebarn.org/','https://www.facebook.com/TheGentleBarn','https://www.instagram.com/thegentlebarn/','https://twitter.com/gentlebarn','https://www.youtube.com/user/gentlebarn','https://www.gentlebarn.org/donate/','https://www.gentlebarn.org/snapchat','https://www.gentlebarn.org/get-involved/','https://www.gentlebarn.org/california/','https://www.gentlebarn.org/donate/','https://www.gentlebarn.org/events/','https://www.gentlebarn.org/blog/','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(12,'Luvin Arms Animal Sanctuary, (Lafayette)','https://www.luvinarms.org/wp-content/uploads/2016/03/LA_Heart_Logo_Medium.png','Colorado','(720) 515-8577','','3470 County Road 7 Erie, CO 80516','http://luvinarms.org/','http://www.facebook.com/luvinarms/','https://www.instagram.com/luvinarms/','','','https://www.luvinarms.org/donate/','','','https://www.luvinarms.org/visit/','https://www.luvinarms.org/donate/','https://www.eventbrite.com/o/luvin-arms-volunteering-13773423760','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(13,'Peaceful Prairie Sanctuary, (Deer Trail)','http://www.peacefulprairie.org/GraphicsNew/homeHeader.jpg','Colorado','303-769-4997','peacefulprairie@netecin.net','81503 E. COUNTY RD. 22, DEER TRAIL, CO 80105 ','http://www.peacefulprairie.org/','https://www.facebook.com/Peaceful-Prairie-Sanctuary-348711124383/','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(14,'Kindred Spirits Sanctuary (Ocala, FL)','http://www.kssfl.org/images/kss.jpg?crc=362379451','Florida','1-877-3-KINDRED','','12606 N US Hwy 27 Ocala, FL 34482','http://www.kssfl.org/','https://www.facebook.com/pages/Kindred-Spirits-Sanctuary/147658945265146','https://www.instagram.com/kindredspiritssanctuary/','https://twitter.com/FlFarmSanctuary','','http://www.kssfl.org/donate.html','','http://www.kssfl.org/volunteer.html','http://www.kssfl.org/visit.html','http://www.kssfl.org/donate.html','http://www.kssfl.org/potluck.html','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(15,'Rooterville (Melrose, Florida)','https://rooterville.org/wp-content/uploads/2016/03/header-logo-4.png?quality=100.3016013118360','Florida','(386) 661-2287',' elaine@rooterville.org','5579 Darwood Street Melrose, Florida 32666','http://www.rooterville.org/','','','','','https://rooterville.org/#FUNOOFYBMJE','','','','https://rooterville.org/#FUNOOFYBMJE','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(16,'Full Circle Farm Sanctuary (Warm Springs, GA)','https://www.fullcirclefarmsanctuary.org/uploads/9/2/4/5/92453914/published/1478649692.png?1495726844','Georgia','','info@fcfsanctuary.org','961 White House Pkwy Warm Springs, GA 31830','https://www.fullcirclefarmsanctuary.org/','https://www.facebook.com/FullCircleFarmSanctuary/','https://www.instagram.com/fullcirclefarmsanctuary/','https://twitter.com/fullcirclesaves','','https://www.fullcirclefarmsanctuary.org/donate.html','','https://www.fullcirclefarmsanctuary.org/volunteer1.html','','https://www.fullcirclefarmsanctuary.org/donate.html','https://www.fullcirclefarmsanctuary.org/events-375834.html','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(17,'Leilani Farm Sanctuary (Haiku, HI)','http://leilanifarmsanctuary.com/wp-content/uploads/2016/09/LeilaniLogo.jpg','Hawaii:','808-298-8544','info@leilanifarmsanctuary.org','260 East Kuiaha Road Haiku, HI 96708','http://www.leilanifarmsanctuary.org/','https://www.facebook.com/leilanifarmsanctuary/','http://instagram.com/laureleeblanchard','','','http://leilanifarmsanctuary.org/donate/','','http://leilanifarmsanctuary.org/volunteer/','http://leilanifarmsanctuary.org/tour-the-sanctuary/','http://leilanifarmsanctuary.org/donate/','','http://leilanifarmsanctuary.org/leilani-blog/','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(18,'EARTH Sanctuary (Roberts)','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/c0.10.200.200/p200x200/10308198_278820472293581_2262742773072214131_n.jpg?_nc_cat=0&oh=e3920beb6a47af630a783b660d2de308&oe=5BE45B3F','Illinois','(860) 880-0744','','N State Route 54 Thawville, Illinois','https://www.facebook.com/EARTHAnimalSanctuary/','https://www.facebook.com/EARTHAnimalSanctuary/','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(19,'Mulberry Hill Farm Animal Sanctuary (Capron)','','Illinois','(815) 569-2672','','10554 Wange Road Capron, Illinois 61012','https://www.facebook.com/MulberryHillFarmSanctuary/','https://www.facebook.com/MulberryHillFarmSanctuary/','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(20,'Wedrose Acres (Gridley)','https://static1.squarespace.com/static/53a46c99e4b01786c91e77ca/t/5410e9e7e4b0f3a0bb76f6be/1410394602095/logo?format=300w','Illinois',' (309) 532-1700 ','hello@wedroseacres.com','16747 Kappa Rd Gridley, IL 61744','http://www.wedroseacres.org/','https://www.facebook.com/wedroseacres/','http://instagram.com/wedroseacres','','','https://www.paypal.com/donate/?token=yaj3S6Y6MwTNXspydwY8xNkaHdugaItxPTNCh7RtiZ4wNhdxG2TQn0vZKOfuXwYrGTaH9G&country.x=US&locale.x=US','','','','https://www.paypal.com/donate/?token=yaj3S6Y6MwTNXspydwY8xNkaHdugaItxPTNCh7RtiZ4wNhdxG2TQn0vZKOfuXwYrGTaH9G&country.x=US&locale.x=US','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(21,'Uplands Peak Sanctuary (Salem)','http://uplandspeaksanctuary.org/wp-content/uploads/2017/10/PEAKlogo_horz_white.png','Indiana','812-896-2114','','6444 Freedom Arney Rd., Freedom, IN 47431','http://uplandspeaksanctuary.org/','https://www.facebook.com/uplandspeaksanctuary','https://www.instagram.com/uplandspeaksanctuary/','','https://www.youtube.com/channel/UCMuqjtc51q2Up1pBfWAqq5Q','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(22,'Iowa Farm Sanctuary (Marengo)','https://static1.squarespace.com/static/5a74922d64b05f90a234c721/t/5a7492a0085229eb7bb90795/1529610666562/?format=1500w','Iowa','(319) 642-7362','CONTACT@IOWAFARMSANCTUARY.ORG','2485 HWY 6 TRL MARENGO, IOWA 52301','http://iowafarmsanctuary.org/','https://www.facebook.com/iowafarmsanctuary','https://www.instagram.com/iowafarmsanctuary/','','','','','','','https://www.patreon.com/iowafarmsanctuary/memberships','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(23,'Home at Last Animal Sanctuary (Salvisa)','','Kentucky','','','PO Box 144 Salvisa, KY 40372','http://www.homeatlastanimals.org/','https://www.facebook.com/groups/102841125077/','','','','https://www.patreon.com/iowafarmsanctuary/memberships','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(24,'Peace Ridge Sanctuary (Penobscot)','http://www.peaceridgesanctuary.org/wp-content/uploads/2017/02/PRS-Logo-Horizontal.gif','Maine','207-722-3035',' info@peaceridgesanctuary.org','1111 Littlefield Road Brooks, Maine 04921','http://www.peaceridgesanctuary.org/','https://www.facebook.com/PeaceRidgeSanctuary/','','http://twitter.com/peace_ridge','','http://www.peaceridgesanctuary.org/donate/','','','','http://www.peaceridgesanctuary.org/donate/','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(25,'Poplar Spring Animal Sanctuary (Poolsville)','http://www.animalsanctuary.org/wp-content/uploads/2015/02/poplar-logo.gif','Maryland','(301) 428-8128','info@animalsanctuary.org','M., 15200 Mount Nebo Rd, Poolesville, MD 20837','http://www.animalsanctuary.org/','https://www.facebook.com/pages/Poplar-Spring-Animal-Sanctuary/327928947366','https://www.instagram.com/maplefarmsanctuary/','http://www.twitter.com/poplarspring','','https://www.classy.org/give/159098/#!/donation/checkout','','','','https://www.classy.org/give/159098/#!/donation/checkout','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(26,'Maple Farm Sanctuary (Mendon)','https://www.maplefarmsanctuary.org/images/buttons/toplogo.png','Massachusetts','508-473-7539',' info@maplefarmsanctuary.org','101 North Avenue Mendon, MA 01756','http://www.maplefarmsanctuary.org/','https://www.facebook.com/pages/Maple-Farm-Sanctuary/7611592460','','https://twitter.com/MFSanctuary','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(27,'Sunny Meadow Sanctuary','http://sunnymeadowsanctuary.org/wp-content/uploads/2013/12/sunny-meadow-sanctuary.png','Massachusetts','','','','http://sunnymeadowsanctuary.org/','https://www.facebook.com/sunnymeadowsanctuary','','','','','','http://sunnymeadowsanctuary.org/volunteer/','','','http://sunnymeadowsanctuary.org/calendar/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(28,'Barn Sanctuary (Near Ann Arbor)','https://barnsanct-a1o5zmsmr.netdna-ssl.com/wp-content/uploads/2017/06/bs-logo.png','Michigan',' 734-612-3020','','20179 McKernan Rd. Chelsea, MI 48118','https://www.barnsanctuary.org/','https://www.facebook.com/thebarnsanctuary','','http://www.twitter.com/barnsanctuary','','https://www.barnsanctuary.org/donate/','','','','https://www.barnsanctuary.org/donate/','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(29,'Sasha Farm (Manchester)','','Michigan','(734) 428-9617','info@sashafarm.org','PO Box 222, Manchester, MI USA 48158','http://www.sashafarm.org/','','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(30,'Broken Roads Ranch (Eden Valley)','https://static.wixstatic.com/media/c17600_6103125d63be4c50a683456b7666418c~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_308,h_152,al_c,q_80,usm_0.66_1.00_0.01/c17600_6103125d63be4c50a683456b7666418c~mv2_d_6000_4000_s_4_2.webp','Minnesota','(320) 761-8330',' brokenroadsranch@gmail.com',' 19709 155th Street, Eden Valley, Mn 55329','http://www.brokenroadsranch.org/','facebook.com/brokenroadsranch','','','','','','https://www.brokenroadsranch.org/volunteer-opportunities','https://www.brokenroadsranch.org/visiting-days-hours','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(31,'Chicken Run Rescue (Minneapolis)','https://media.cargocollective.com/1/5/161955/headerimg/-2.1.png','Minnesota','','info@chickenrunrescue.org','','http://www.chickenrunrescue.org/','https://www.facebook.com/Chicken-Run-Rescue-475016785200/','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(32,'Spring Farm Sanctuary (Long Lake)','https://springfarmsanctuary.org/wp-content/uploads/2018/05/sfslogowhite250.png','Minnesota','','robin@springfarmsanctuary.org','1325 Tamarack Drive Long Lake, MN 55356','https://www.springfarmsanctuary.org/','https://www.facebook.com/springfarmsanctuary/','http://instagram.com/springfarmsanctuary','','','','','','','','https://springfarmsanctuary.org/events/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(33,'Carolina Waterfowl Rescue (Indian Trail)','https://static1.squarespace.com/static/5a790ac5a9db09f34c0e31f6/t/5a79356c71c10b8ee66877e0/1527899570498/?format=1500w','North Carolina',' 704.668.9486','info@cwrescue.org','5403 Poplin Rd. Indian Trail, NC 28079','http://www.carolinawaterfowlrescue.com/','','','','','','','','','','https://www.cwrescue.org/events/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(34,'Piedmont Farm Animal Refuge','http://piedmontrefuge.org/','North Carolina','919-533-4013','','Piedmont Farm Animal Refuge 7236 NC Hwy 87 N Pittsboro, NC 27312','http://piedmontrefuge.org/','https://www.facebook.com/PiedmontFarmAnimalRefuge','https://www.instagram.com/piedmont_farm_animal_refuge/','https://twitter.com/PiedmontRefuge','','https://www.paypal.com/uk/fundraiser/charity/151134','https://www.flickr.com/photos/98817423@N08/','http://piedmontrefuge.org/membership/volunteer/','http://piedmontrefuge.org/tour-information/','https://www.paypal.com/uk/fundraiser/charity/151134','http://piedmontrefuge.org/news/','http://piedmontrefuge.org/news/','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(35,'TRIANGLE CHICKEN ADVOCATES!','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/c0.9.200.200/p200x200/20108236_1168797536559804_6423726859264742461_n.jpg?_nc_cat=0&oh=2563b28a80f3553eaa92b5a93c2db887&oe=5BE9ABF8','North Carolina','','','','https://trianglechickenadvocates.org/','http://www.facebook.com/TriangleChanceforAll','','','','','','','','','https://trianglechickenadvocates.org/events/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(36,'For the Animals Sanctuary (Blairstown)','https://fortheanimalssanctuary.wordpress.com/','New Jersey',' (908) 362-5224','','8 Cherokee Trail, Blairstown, NJ 07825','http://www.fortheanimalssanctuary.org/','','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(37,'The Barnyard Sanctuary','https://barnyardsanctuary.org/wp-content/themes/earth/images/logo.jpg','New Jersey','973-670-4477','info@barnyardsanctuary.org','The Barnyard Sanctuary PO Box 167, Blairstown, NJ 07825','https://barnyardsanctuary.org/','https://www.facebook.com/TheBarnyardSanctuary/','https://www.instagram.com/BarnyardSanctuary/','https://twitter.com/TheBarnyardNJ','https://www.youtube.com/channel/UCqanFTUaxwenXCvmiuLSgWQ','https://barnyardsanctuary.org/how-you-can-help/','','https://barnyardsanctuary.org/hay-helper/','','https://barnyardsanctuary.org/how-you-can-help/','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(38,'Rancho Relaxo','http://www.ranchorelaxonj.org/wordpress/wp-content/themes/blankslate-child/img/--Logo/ranchorelaxo-logo.png','New Jersey','','','','http://www.ranchorelaxonj.org/','https://www.facebook.com/ranchorelaxonj','https://www.instagram.com/boochaces/','','','https://www.patreon.com/boochaces/memberships','','','','https://www.patreon.com/boochaces/memberships','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(39,'The Chicken Refuge','https://1.bp.blogspot.com/-Xg5AdieL-pQ/WVEKgiTbtXI/AAAAAAAAMYk/IPL7EJCtiBsgS578xAT-U0zzG8VPmNJCACLcBGAs/s320/chicken3alogo.jpg','New Jersey','908-377-8931','info@thechickenrefuge.org','PO Box 120, Whitehouse Station, NJ 08889','http://www.thechickenrefuge.org/','https://www.facebook.com/thechickenrefuge/','https://www.instagram.com/thechickenrefuge/','https://twitter.com/thechickenrefug','','https://actionsprout.io/F57799/','','','','https://actionsprout.io/F57799/','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(40,'Funny Farm Rescue Animal Sanctuary','http://www.funnyfarmrescue.org/index_htm_files/6398.png','New Jersey','(609) 742-9410','laurie@funnyfarmrescue.org','6908 Railroad Blvd. Mays Landing, NJ 08330','http://www.funnyfarmrescue.org/','https://www.facebook.com/FunnyFarmRescue','','','','http://www.funnyfarmrescue.org/donate.htm','','','','http://www.funnyfarmrescue.org/donate.htm','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(41,'Tamerlaine Farm Animal Sanctuary','https://static1.squarespace.com/static/51474270e4b0ad02dfd3b035/t/58471ac9579fb36bacea3683/1527767666298/?format=1500w','New Jersey','',' info@tamerlainefarm.org','147 River Road, Montague, NJ 07827','','https://www.facebook.com/1281188380','https://www.instagram.com/tamerlainefarm/','https://twitter.com/TamerlaineFAS','','https://tamerlainefarm.org/donate','','https://tamerlainefarm.org/volunteer/','https://tamerlainefarm.org/contact/','https://tamerlainefarm.org/donate','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(42,'Kindred Spirits Animal Sanctuary (Santa Fe)','','New Mexico','505-471-5366','kindredspiritsnm@earthlink.net','3749-A State Road 14 Santa Fe, NM, 87508 United States','http://www.kindredspiritsnm.org/','https://www.facebook.com/KindredSpiritsAnimalSanctuary/','','','','','','','','','http://www.kindredspiritsnm.org/new-page/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(43,'Old Windmill Trail Farm Animal Sanctuary (Cerrillos)','','New Mexico','505 - 660 - 3475',' karinbrandianimalart@gmail.com','312 Old Windmill Trail, Cerrillos, New Mexico, 87010','https://www.care2.com/causes/the-olde-windmill-trail-farm-animal-sanctuary.html','','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(44,'Catskill Animal Sanctuary (Saugerties)','https://casanctuary.org/wp-content/uploads/2017/10/Compact-Logo.png','New York','(845) 336-8447','communications@casanctuary.org','316 Old Stage Road, Saugerties, NY 12477','http://casanctuary.org/','','','','','https://secure.casanctuary.org/np/clients/catskillanimal/donation.jsp?campaign=1','','','https://casanctuary.org/getinvolved/programs/visiting-cas/','https://secure.casanctuary.org/np/clients/catskillanimal/donation.jsp?campaign=1','https://casanctuary.org/events/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(45,'Farm Sanctuary (Watkins Glen)','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p200x200/12654654_10153933551483824_7770142689115197870_n.png?_nc_cat=1&oh=d976e422298ae6be861e26c9d65040f4&oe=5BDD780D','New York','','info@farmsanctuary.org','','http://www.farmsanctuary.org/','','','','','','','','https://www.farmsanctuary.org/the-sanctuaries/watkins-glen-ny/tours/','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(46,'Safe Haven Farm Sanctuary (Poughquag, NY)','https://safehavenfarmsanctuary.org/wordpress/wp-content/uploads/2014/10/LogoQM3white1.png','New York','(845) 724-5138',' farmanimals.crain@gmail.com','542 Gardner Hollow Road, Poughquag, NY 12570','http://safehavenfarmsanctuary.org/','','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(47,'Woodstock Farm Animal Sanctuary (Woodstock)','http://woodstocksanctuary.org/wp-content/themes/woodstocksanctuary/images/woodstock_logo.jpg','New York','845-247-5700','','2 Rescue Road, High Falls, NY 12440','http://woodstocksanctuary.org/','https://www.facebook.com/WoodstockFarm','https://www.instagram.com/woodstocksanctuary/','https://twitter.com/WoodstockFarm','https://www.youtube.com/user/WoodstockSanctuary','https://donate.woodstocksanctuary.org/give/50028/#!/donation/checkout','https://www.pinterest.com/WoodstockFarm/','http://woodstocksanctuary.org/volunteer/','http://woodstocksanctuary.org/hours/','https://donate.woodstocksanctuary.org/give/50028/#!/donation/checkout','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(48,'Happy Trails Farm Animal Sanctuary','http://happytrailsfarm.org/wp-content/uploads/2017/08/HTFAS_LOGO_1C_WHT.png','Ohio','','','','http://www.happytrailsfarm.org/','','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(49,'Sunrise Sanctuary (Marysville)','http://www.sunrisesanctuary.org/wp-content/uploads/2018/04/cropped-logo-2.png','Ohio',' 937-578-8771','','16730 Martin Welch Road, Marysville, OH 43040','http://www.sunrisesanctuary.org/','https://www.facebook.com/SunriseSanctuary/','','','','http://www.sunrisesanctuary.org/how-you-can-help/donate/','','http://www.sunrisesanctuary.org/volunteer/','http://www.sunrisesanctuary.org/open-barn-days/','http://www.sunrisesanctuary.org/how-you-can-help/donate/','http://www.sunrisesanctuary.org/open-barn-days/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(50,'Green Acres Farm Sanctuary (Silverton)','http://greenacresfarmsanctuary.org/wp-content/uploads/2012/04/Green-Aceres-logo.png','Oregon','','greenacresfarmsanctuary@hotmail.com ','P.O. Box 904, Silverton OR 97381','http://www.greenacresfarmsanctuary.org/','http://www.facebook.com/greenacresfarmsanctuary','https://www.instagram.com/greenacresfarmsanctuary','','','https://www.paypal.com/donate/?token=JYpfisrTV7nF8OTrkc2sGtzemvLMKov5pyuUCBuudU6Pr_FF-qZGs5Ya1P4hsI6kHbsmHm&country.x=US&locale.x=US','','','http://greenacresfarmsanctuary.org/educational-tours/','https://www.paypal.com/donate/?token=JYpfisrTV7nF8OTrkc2sGtzemvLMKov5pyuUCBuudU6Pr_FF-qZGs5Ya1P4hsI6kHbsmHm&country.x=US&locale.x=US','http://greenacresfarmsanctuary.org/farm-news-events/','http://greenacresfarmsanctuary.org/farm-news-events/','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(51,'Lighthouse Farm Sanctuary (Scio)','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/13729127_10153862840123511_6785530413020889785_n.jpg?_nc_cat=0&oh=212752b287424cfbbc4c385efa26f824&oe=5BE203A0','Oregon','','info@lighthousefarmsanctuary.org','PO Box 451 Scio, OR 97374','https://www.facebook.com/lighthousefarmsanctuary','https://www.facebook.com/lighthousefarmsanctuary','https://www.instagram.com/lighthousefarmsanctuary/?hl=en','https://twitter.com/lf_sanctuary','','http://www.lighthousefarmsanctuary.org/donate','','http://www.lighthousefarmsanctuary.org/volunteer','','http://www.lighthousefarmsanctuary.org/donate','http://www.lighthousefarmsanctuary.org/calendar','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(52,'Out to Pasture Sanctuary (Estacada)','https://pbs.twimg.com/profile_images/2383504357/qzjqz3vjoo7wvvo5igvb_400x400.jpeg','Oregon','503-756-8652','kit.collins@gmail.com','33190 SE Regan Hill Rd, Estacada, Oregon 97023','http://www.outtopasturesanctuary.org/','https://www.facebook.com/OTPSanctuary','https://www.instagram.com/otpsanctuary/','https://twitter.com/OTPSanctuary','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(53,'Sanctuary One (Jacksonville)','https://sanctuaryone.org/wp-content/themes/theme1563/images/logo.png','Oregon','541.899.8627','info@SanctuaryOne.org','13195 Upper Applegate Road, Jacksonville, OR 97530','http://www.sanctuaryone.org/','','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(54,'Wildwood Farm Sanctuary (Newberg)','https://wildwoodfarmsanctuary.org/wp-content/uploads/2016/03/PNG1-2-e1457911459793.png','Oregon','','','15481 NE North Valley Rd, Newberg, OR 97132','http://www.wildwoodfarmsanctuary.org/','https://www.facebook.com/WildwoodFarmSanctuary/','https://www.instagram.com/wildwoodfarmsanctuary/','https://twitter.com/WildwoodOregon','','https://wildwoodfarmsanctuary.org/donate/','','https://wildwoodfarmsanctuary.org/volunteering-and-work-parties/','','https://wildwoodfarmsanctuary.org/donate/','https://wildwoodfarmsanctuary.org/events-and-tours/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(55,'Chenoa Manor (Avondale)','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/1545222_10151787176932484_564110335_n.jpg?_nc_cat=0&oh=99ec2ed6c7402cd7068ac31019ed5ff2&oe=5BE638BC','Pennsylvania','','hello@chenoamanor.org','733 Glen Willow Rd, Avondale, PA 19311','http://www.chenoamanor.org/','https://www.facebook.com/Chenoamanor','https://www.instagram.com/chenoamanor/','https://twitter.com/chenoamanorfarm','','https://www.chenoamanor.org/donate/','https://www.pinterest.com/chenoamanor/','https://www.chenoamanor.org/connect/volunteer/','https://www.chenoamanor.org/connect/visiting-chenoa/','https://www.chenoamanor.org/donate/','https://www.chenoamanor.org/events/category/events/','https://www.chenoamanor.org/blog/','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(56,'Farm Animal Rescue of Mifflinburg','http://nebula.wsimg.com/6ba650e0f4a516c49b0a8073a90ea7ac?AccessKeyId=0E361E722B7B9536AC4E&disposition=0&alloworigin=1','Pennsylvania','570-966-3175','','Mifflinburg, PA 17844','http://www.farmanimalrescueofmifflinburg.org/','','','','','http://www.farmanimalrescueofmifflinburg.org/donate.html','','http://www.farmanimalrescueofmifflinburg.org/volunteer.html','','http://www.farmanimalrescueofmifflinburg.org/donate.html','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(57,'Hope Haven Animal Sanctuary','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p200x200/26731501_1816477815031905_3552409556064218771_n.jpg?_nc_cat=0&oh=1a5d7ae939b228bb9ff6989375c9f685&oe=5BB13E92','Pennsylvania','412 - 366 - 1187',' Karen@HopeHavenFarm.org ','Wexford-Bayne Road, Sewickley, Pennsylvania 15143','http://hopehavenfarm.org/index.html','https://www.facebook.com/hopehavenfarmsanctuary/','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(58,'Down to Earth Farm','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p200x200/10393548_852457804820415_3919869835638272597_n.jpg?_nc_cat=0&oh=095db75eebee03334a8242f06e13c3ba&oe=5BEB6C3B','Pennsylvania','215 - 370 - 5585','crystaldawnmiller@hotmail.com','PO Box 179 Carversville, PA 18913 ','https://www.facebook.com/Down2EarthFarm','https://www.facebook.com/Down2EarthFarm','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(59,'Indraloka','http://www.indraloka.org/wp-content/themes/indra/img/logo.png','Pennsylvania','570.763.2908','info@indraloka.org','P.O. Box 155 Mehoopany, PA 18629','http://www.indraloka.org/','https://www.facebook.com/IndralokaAS','https://www.instagram.com/Indralokaanimalsanctuary/','https://twitter.com/IndralokaAS','','https://indraloka.z2systems.com/np/clients/indraloka/donation.jsp','https://www.pinterest.com/IndralokaAS/','http://www.indraloka.org/join-us/volunteer/','http://www.indraloka.org/join-us/visit/','https://indraloka.z2systems.com/np/clients/indraloka/donation.jsp','http://www.indraloka.org/join-us/events/thanksliving/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(60,'The Gentle Barn (Knoxville)','https://www.gentlebarn.org/assets/components/gb/img/logo-gb2017.png','Tennessee','865-333-5001','media@gentlebarn.org','Knoxville, TN 37932','http://www.gentlebarn.org/tennessee/','','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(61,'The Pig Preserve','http://nebula.wsimg.com/4ccd525081aa62fb57cec0bfc37e530c?AccessKeyId=4275B1CDB1542AA86467&disposition=0&alloworigin=1','Tennessee','931-397-4051','thepigpreserve@gmail.com','The Pig Preserve, PO Box 555, Jamestown TN, 38556','http://www.thepigpreserve.org/','','','','','http://www.thepigpreserve.org/donate-.html','','','','http://www.thepigpreserve.org/donate-.html','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(62,'Black Beauty Ranch (Murchison)','http://www.fundforanimals.org/assets/images/ffa-logo.png','Texas','(903) 469-3811','blackbeautyinfo@fundforanimals.org','12526 County Road 3806, Murchison, Texas 75778','http://blackbeautyranch.org/','https://www.facebook.com/TheFundforAnimals','https://www.instagram.com/TheFundforAnimals/','','','','','','','','','http://www.fundforanimals.org/news/?credit=web_id659930364','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(63,'Dreamtime Sanctuary (Elgin)','https://static.wixstatic.com/media/a1198d_6abd515069e4498f82f2c3e53c62d147~mv2.jpg/v1/fill/w_813,h_197,al_c,lg_1,q_80/a1198d_6abd515069e4498f82f2c3e53c62d147~mv2.webp','Texas','','dreamtimeanimals@gmail.com','556 Roemer Road, Elgin, Texas 78621','http://www.dreamtimesanctuary.org/','http://www.facebook.com/dreamtimesanctuary','https://www.instagram.com/dreamtimesanctuary/','','','https://www.dreamtimesanctuary.org/donate','','','https://www.dreamtimesanctuary.org/get_involved','https://www.dreamtimesanctuary.org/donate','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(64,'Rowdy Girl Sanctuary (Angleton)','https://rowdygirlsanctuary.org/wp-content/uploads/2015/02/RowdyGirl_2c.png','Texas','979-314-9925','renee@rowdygirlsanctuary.org','9667 west, TX-35, Angleton, TX 77515','https://rowdygirlsanctuary.org/','https://www.facebook.com/rowdygirlsanctuary','https://www.instagram.com/rowdygirlsanctuary/','https://twitter.com/rowdygirlranch','https://www.youtube.com/rowdygirlsanctuary','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(65,'Best Friends Animal Society (Kanab)','https://cdn.bestfriends.org/s3fs-public/bfas.png','Utah','','','','http://bestfriends.org/','','','','','https://support.bestfriends.org/site/Donation2?df_id=2460&mfc_pref=T&2460.donation=form1&_ga=2.8982385.596467122.1530403001-1599896868.1530403001','','','','https://support.bestfriends.org/site/Donation2?df_id=2460&mfc_pref=T&2460.donation=form1&_ga=2.8982385.596467122.1530403001-1599896868.1530403001','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(66,'Ching Farm Rescue & Sanctuary (Riverton)','http://chingsanctuary.org/wp-content/uploads/2015/11/Ching-Logo.png','Utah','','chingfarmrescue@gmail.com','PO Box 935 Riverton, UT, 84065','http://www.chingsanctuary.org/','https://www.facebook.com/chingsanctuary','','https://twitter.com/chingsanctuary','','http://chingsanctuary.org/help-out/donate/','','http://chingsanctuary.org/help-out/volunteer/','http://chingsanctuary.org/information/educational-tours/','http://chingsanctuary.org/help-out/donate/','http://chingsanctuary.org/events/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(67,'Gerda\'s Animal Aid
(Townshend)','
https:
//img1.wsimg.com/isteam/ip/5bece2e0-7613-4e1f-a07f-8bf6036079ad/logo/d214c73f-2717-4503-b463-8ca3226c1c6d.png/:/rs=
h:
100','Vermont','
(802) 874-7213','','5825 RT 30 Townshend, VT 05353','
http:
//www.gerdasanimalaid.org/','
https:
//www.facebook.com/gerdasequinerescue','
https:
//www.instagram.com/gerdasequinerescue','
https:
//twitter.com/GerdasEquineRes','
https:
//www.youtube.com/channel/UCH9D8MmGiKY4CkS2jrhvcGA?view_as=subscriber','
https:
//gerdasequinerescue.org/how-to-help','','','
https:
//gerdasequinerescue.org/how-to-help','
https:
//gerdasequinerescue.org/how-to-help','
https:
//gerdasequinerescue.org/events','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`id`,`SanctuaryName`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES (68,'Vine Sanctuary
(Springfield)','
http:
//www.bravebirds.org/images/vine_2015_logo-422.jpg','Vermont','802-885-4017','','Springfield, VT','
http:
//www.bravebirds.org/','
https:
//www.facebook.com/VINEsanctuary','','','','
http:
//vine.bravebirds.org/support-the-sanctuary/','','','','
http:
//vine.bravebirds.org/support-the-sanctuary/','','
http:
//blog.bravebirds.org/','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`id`,`SanctuaryName`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES (69,'Peaceful Fields Sanctuary
(Winchester)','
https:
//peacefulfieldssanctuary.files.wordpress.com/2017/10/cropped-cropped-cropped-cropped-cropped-unnamed11.jpg','Virginia','540-550-5540','','Winchester, virginia','
https:
//peacefulfieldssanctuary.org/','','','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`id`,`SanctuaryName`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES (70,'United Poultry Concerns
(Machipongo)','
http:
//www.upc-online.org/img/banner_home.jpg','Virginia',' 757-678-7875 ',' info@upc-online.org','PO Box 150 Machipongo, VA 23405 ','
http:
//www.upc-online.org/','
http:
//www.facebook.com/UnitedPoultryConcerns','','
http:
//www.twitter.com/upcnews','
http:
//www.youtube.com/unitedpoultryconcerns','
http:
//www.upc-online.org/donate/','','','','
http:
//www.upc-online.org/donate/','
http:
//www.upc-online.org/events/','
http:
//www.upc-online.org/nr/','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`id`,`SanctuaryName`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES (71,'Rikki\'s Refuge (Orange County)','http://blog.rikkisrefuge.org/wp-content/uploads/2014/07/two.jpg','Virginia','540-854-0870','mail@rikkisrefuge.org','21410 Constitution Hwy Rapidan VA 22733','http://rikkisrefuge.org/','','','','','http://rikkisrefuge.org/donate-now/','','http://rikkisrefuge.org/come-join-the-fun/','','http://rikkisrefuge.org/donate-now/','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(72,'Baahaus Animal Rescue Group (Vashon)','','Washington','(206) 463-2513','info@baahaus.org','P.O. Box 2356 Vashon, WA 98070','http://www.baahaus.org/','https://www.facebook.com/BaaHausInfo/','','','','http://www.baahaus.org/donation_sponsorship_form.html','','http://www.baahaus.org/volunteers.html','','http://www.baahaus.org/donation_sponsorship_form.html','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(73,'Pasado\'s Safe Haven
(Sultan)','
https:
//www.pasadosafehaven.org/cms/assets/uploads/2014/11/logo-for-web.png','Washington','
(360) 793-9393 ','info@pasadosafehaven.org','P.O. Box 171, Sultan, WA 98294','
http:
//www.pasadosafehaven.org/','
https:
//www.facebook.com/pasadosafehaven','
http:
//instagram.com/pasados','
https:
//twitter.com/pasados','','
https:
//www.pasadosafehaven.org/donate/','','
https:
//www.pasadosafehaven.org/getinvolved/volunteer/volunteer-your-time/','','
https:
//www.pasadosafehaven.org/donate/','
https:
//www.pasadosafehaven.org/events/category/events/','
https:
//www.pasadosafehaven.org/news-events-2/','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`id`,`SanctuaryName`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES (74,'Pigs Peace Sanctuary
(Stanwood)','','Washington','
(360) 629-6433 ','pigspeace@gmail.com ','Pigs Peace Sanctuary P.O. Box 295 Stanwood, WA. 98292','
http:
//www.pigspeace.org/','','','','','
http:
//www.pigspeace.org/main/donate.html','','
http:
//www.pigspeace.org/main/volunteer.html','
http:
//www.pigspeace.org/visiting_calendar.php','
http:
//www.pigspeace.org/main/donate.html','','
http:
//www.pigspeace.org/main/newsletter.html','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`id`,`SanctuaryName`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES (75,'Precious Life Animal Sanctuary
(Edmonds)','','Washington','360-582-1437','CarylTurner@hotmail.com','','
http:
//www.preciouslifeanimalsanctuary.org/','','','','','
http:
//www.preciouslifeanimalsanctuary.org/donate.html','','','','
http:
//www.preciouslifeanimalsanctuary.org/donate.html','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`id`,`SanctuaryName`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES (76,'River\'s Wish Animal Sanctuary (Spokane County)','https://scontent-iad3-1.cdninstagram.com/vp/74d120d8e054c613399e5124589890ee/5BEBD265/t51.2885-19/s150x150/12940218_1302621039767828_720117401_a.jpg','Washington','(509) 951-3650','info@riverswishanimalsanctuary.org','PO Box 18371, Spokane, WA 99218','http://www.riverswishanimalsanctuary.org/','https://www.facebook.com/riverswishanimalsanctuary/','https://www.instagram.com/riverswishanimalsanctuary/','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(77,'Pigs Animal Sanctuary (Shepherdstown)','https://pigs.org/wp-content/uploads/2017/09/PIGS-Logo.png','West Virginia','833-257-PIGS','info@pigs.org','PO Box 2087\n301 S King St\nShepherdstown, WV 25443','http://www.pigs.org/','http://www.facebook.com/PIGSsanctuary','http://www.instagram.com/pigsanimalsanctuary/','http://www.twitter.com/pigssanctuary','http://www.youtube.com/PIGSanctuary','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(78,'Autumn Farm Sanctuary (Cedarburg)','http://www.autumnfarmsanctuary.com/pics/autumn-farm-logo.svg','Wisconsin','262-376-3833','','PO Box 188\nCedarburg, WI 53012','http://www.autumnfarmsanctuary.com/','https://www.facebook.com/Autumnfarmsanctuary.org/','','','','https://squareup.com/store/autumn-farm-sanctuary','','','','https://squareup.com/store/autumn-farm-sanctuary','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(79,'Heartland Farm Sanctuary (Madison)','https://d2b636pbgdyhbj.cloudfront.net/wp-content/themes/hfs1/img/logo.gif','Wisconsin','920-328-8280','info@heartlandfarmsanctuary.org','11713 Mid Town Rd, Verona, WI 53593','http://www.heartlandfarmsanctuary.org/','http://www.facebook.com/pages/Heartland-Farm-Sanctuary/257377479824','','http://twitter.com/HeartlandFS','http://youtube.com/HeartlandFS','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(80,'SoulSpace Farm Sanctuary (New Richmond)','https://www.soulspacesanctuary.org/uploads/1/1/4/4/114425803/logo-compassion.png','Wisconsin',' 612-760-0471','info@soulspacesanctuary.org','SoulSpace Farm Sanctuary\n1976 Wall Street \nNew Richmond, WI 54017','https://www.soulspacesanctuary.org/','https://facebook.com/soulspacesanctuary','https://instagram.com/soulspacesanctuary','','','https://www.soulspacesanctuary.org/donate.html','https://pinterest.com/soulspacesanctuary','','','https://www.soulspacesanctuary.org/donate.html','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(81,'Big Sky Ranch Animal Sanctuary (Kemptville, Ontario)','https://static.wixstatic.com/media/62a476_2f60878cc40640ca93a8430eab6513be.jpg/v1/fill/w_241,h_206,al_c,q_80,usm_0.66_1.00_0.01/62a476_2f60878cc40640ca93a8430eab6513be.webp','Canada','613-258-7118','bigskyranch@xplornet.ca','810 Pelton Road Kemptville, ON','http://www.bigskyranch.ca/','https://www.facebook.com/BigSkyRanchAnimalSanctuary','https://twitter.com/BigSkyRanch1','','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(82,'Forever Mircroranch Sanctuary (Saskatchewan)','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p200x200/28872280_1023244831146939_2838877393847332038_n.jpg?_nc_cat=0&oh=5699968bd0bceb6aa729fe9318c3ac3f&oe=5BDCEA51','Canada','','info@forevermicroranch.com','','http://www.forevermicroranch.com/','https://www.facebook.com/TheMicroRanch/','','https://twitter.com/hashtag/forevermicroranch?src=hash','','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(83,'Happily Ever Esther Farm Sanctuary (Campbellville, Ontario)','https://static1.squarespace.com/static/563a6492e4b069a23d8a7ac8/t/570fc1d7ab48dec85aefb8d1/1460650474196/?format=1500w','Canada','289-924-1187','','Milton, ON, Canada','http://www.happilyeveresther.ca/','https://www.facebook.com/happilyeveresther/','','','','https://www.happilyeveresther.ca/donate','','','','https://www.happilyeveresther.ca/donate','https://www.happilyeveresther.ca/events-calendar/','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(84,'North Mountain Animal Sanctuary (Nova Scotia)','http://nmas.ca/wp-content/uploads/2017/09/logo-small.png?x32398','Canada','902-538-3662','info@nmas.ca','Annapolis Valley of Nova Scotia','http://nmas.ca/','https://www.facebook.com/northmtnanimalsanctuary/','http://instagram.com/northmountainanimalsanctuary','','https://www.youtube.com/user/NManimalsanctuary','https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H7RS7H5LNULKY','','','','https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H7RS7H5LNULKY','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(85,'Rescue And Sanctuary for Threatened Animals (De Winton, Alberta)','http://rastarescue.org/wp-content/uploads/2017/04/RASTA-logo-no-circle-min.png','Canada','','RastaSanctuary@gmail.com','RASTA Sanctuary 9233 Chemainus Road Chemainus, BC V0R 1K5 CANADA','http://rastarescue.org/','','','','','https://www.canadahelps.org/en/dn/11752','','','','https://www.canadahelps.org/en/dn/11752','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(86,'Wishing Well Sanctuary, (Ontario)','http://www.wishingwellsanctuary.org/img/logo_med.png','Canada',' (905) 775-9179',' info@wishingwellsanctuary.org',' 2710 10th Line, Bradford, Ont. L3Z 3L3 ','http://www.wishingwellsanctuary.org/','https://www.facebook.com/WishingWellSanctuary','https://instagram.com/wishing_well_sanctuary/','https://twitter.com/peaceforall_wws','https://www.youtube.com/channel/UCGu8IqaE-W4zsyUPW1TjgYw','http://www.wishingwellsanctuary.org/donations.php','','','','http://www.wishingwellsanctuary.org/donations.php','http://www.wishingwellsanctuary.org/upcoming-events.php','','2018-07-02 17:47:14','2018-07-02 17:47:14');
INSERT INTO `AnimalSanLists` (`
id`,`SanctuaryName
`,`SanctuaryImage`,`State`,`animalPhone`,`animalSanEmail`,`animalSanAddress`,`animalWebsite`,`Facebook`,`Instagram`,`Twitter`,`youTube`,`DonationPage`,`Volunteer`,`VisitationPage`,`animalBlog`,`listAnimal`,`EventPage`,`animalAbout`,`createdAt`,`updatedAt`) VALUES
(87,'Constance Creek Wildlife Refuge (Ottawa)','https://static.wixstatic.com/media/e003e4_b82c9777845646f28ca6f06a5b4b675d~mv2.gif','Canada','613-222-4719','wildlife@ccwr.ca','2494 Dunrobin Road\nOttawa ON K0A 1T0','http://ccwr.ca/','https://www.facebook.com/pages/Constance-Creek-Wildlife-Refuge/277557201924','','','https://www.youtube.com/channel/UCGMRoc00aoG2dh6imASa6-Q','','','','','','','','2018-07-02 17:47:14','2018-07-02 17:47:14');
