import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Div, AdaptivityProvider, AppRoot, Panel, PanelHeader, Title } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import "./App.css"
import "./resert.css";
const App = () => {
	const [activePanel, setActivePanel] = useState('home');

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Panel id="home">
						<PanelHeader>Марафон в Туле</PanelHeader>
						<Div align="center" className="main" style={{ backgroundColor : "#1B3738"}}>
							<Title level="2" weight="heavy" style={{ color: "#fff" }}>«Вездекод» возвращается!</Title>
							<div class="main__content-desc">
								<p class="main__content-text">
									Встретимся в онлайн-формате с 24 по 25 апреля. <br />
									Подготовили задачи по мобильной (веб- и нативной) разработке, тестированию, информационной безопасности, 
									робототехнике и другим направлениям — на решение будет 30 часов. <br />
								</p>
								<p class="main__content-text">
									Участвовать можно как в одиночку, так и в команде до четырёх человек — чем больше специалистов разных 
									профилей соберутся вместе,
									тем выше шанс одержать победу. Но учтите, что принять вызов можно только один раз: если вам интересно 
									посоревноваться офлайн или удобен другой часовой пояс — приглашаем на встречу во <br />
									Владивостоке, Калининграде или Екатеринбурге.
									Эти события состоятся с мая по сентябрь. <br />
								</p>
							</div>
						</Div>


						<div align="center">
							<section class="about">
									<h2 class="about__title title">Организаторы</h2>
									<div class="about__cards">
										<div class="about__item">
											<div class="about__item-avatar">
												<div class="about__avatar-container">
													<img class="about__avatar-img" src="https://yt3.ggpht.com/ytc/AAUvwni9OYFbBo-xNWm6FBkXCXWxPLl3NQxUhEUVOSohmw=s900-c-k-c0x00ffffff-no-rj" alt="Команда ВК" />
												</div>
											</div>
											<div class="about__item-title">Команда ВКонтакте</div>
											<p class="about__item-desc">Cоздаём ВКонтакте — один из самых высоконагруженных проектов рунета.</p>
											<a class="about__link" href="https://vk.com/vkteam">Перейти</a>
										</div>
	
										<div class="about__item">
											<div class="about__item-avatar">
												<img class="about__avatar-img" src="https://egortilda.github.io/marafon/img/TulGU.jpg" alt="Команда ВК" />
											</div>
											<div class="about__item-title">ИПМКН@ТулГУ</div>
											<p class="about__item-desc">Институт прикладной математики и компьютерных наук ТулГУ</p>
											<a class="about__link" href="https://vk.com/pm2kn">Перейти</a>
										</div>
									</div>
								</section>
								<secrtion class="partners">
									<h2 class="partners__title title">Партнеры</h2>
									<div class="about__cards">
										<div class="about__item">
											<div class="about__item-avatar">
												<div class="about__avatar-container">
													<img class="about__avatar-img" src="https://egortilda.github.io/marafon/img/RUB.jpg" alt="Команда ВК" />
												</div>
											</div>
											<div class="about__item-title">Академия RUBICONE</div>
											<p class="about__item-desc">Программирование, робототехника, создание компьютерных игр, разработка сайтов, фото-, видеомонтаж, анимация, блоггинг.</p>
											<a class="about__link" href="https://vk.com/rubiconepro">Перейти</a>
										</div>
	
										<div class="about__item">
											<div class="about__item-avatar">
												<img class="about__avatar-img" src="https://egortilda.github.io/marafon/img/mm.png" alt="Команда ВК" />
											</div>
											<div class="about__item-title">Веб-интегратор Максимастер</div>
											<p class="about__item-desc">Разрабатываем технически сложные высоконагруженные веб-проекты.</p>
											<a class="about__link" href="https://maximaster.ru/">Перейти</a>
										</div>
	
										<div class="about__item">
											<div class="about__item-avatar">
												<img class="about__avatar-img" src="http://egortilda.github.io/marafon/img/scl.jpg" alt="Команда ВК" />
											</div>
											<div class="about__item-title">Scloud.ru</div>
											<p class="about__item-desc">Официальный партнер компании «1С»</p>
											<a class="about__link" href="https://vk.com/scloud">Перейти</a>
										</div>
	
										<div class="about__item">
											<div class="about__item-avatar">
												<img class="about__avatar-img" src="https://egortilda.github.io/marafon/img/DDP.jpg" alt="Команда ВК" />
											</div>
											<div class="about__item-title">DD Planet</div>
											<p class="about__item-desc">Реализуем высоконагруженные веб-проекты, корпоративные порталы и мобильные приложения.</p>
											<a class="about__link" href="https://vk.com/ddplanet">Перейти</a>
										</div>
									</div>
								</secrtion>
						</div>
					</Panel>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
