import '@/views/styles/index.css'
import './index.scss'

import Logo from '@/assets/images/avatar.png'
// import HomeLogo from '@/assets/images/icons/home.svg'
import SearchLogo from '@/assets/images/icons/search.svg'
import FeedsLogo from '@/assets/images/icons/feeds.svg'
import NotificationsLogo from '@/assets/images/icons/notifications.svg'
import ModerationLogo from '@/assets/images/icons/moderation.svg'
import ProfileLogo from '@/assets/images/icons/profile.svg'
import SettingsLogo from '@/assets/images/icons/settings.svg'
import CoverImage from '@/assets/images/cover.png'

export default function App() {

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="#">
            <img
              src={Logo}
              width={`64`} height={`64`}
              alt="Logo"
            />
          </a>
          <ul className="navListLinks">
            <li className="navLink">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                  <path fill="none" stroke="currentColor" stroke-width="4"
                        d="M 23.951 2 C 23.631 2.011 23.323 2.124 23.072 2.322 L 8.859 13.52 C 7.055 14.941 6 17.114 6 19.41 L 6 38.5 C 6 39.864 7.136 41 8.5 41 L 18.5 41 C 19.864 41 21 39.864 21 38.5 L 21 28.5 C 21 28.205 21.205 28 21.5 28 L 26.5 28 C 26.795 28 27 28.205 27 28.5 L 27 38.5 C 27 39.864 28.136 41 29.5 41 L 39.5 41 C 40.864 41 42 39.864 42 38.5 L 42 19.41 C 42 17.114 40.945 14.941 39.141 13.52 L 24.928 2.322 C 24.65 2.103 24.304 1.989 23.951 2 Z"/>
                </svg>
                home
              </a>
            </li>
            <li className="navLink">
              <a href="#">
                <img
                  src={SearchLogo}
                  width={`64`} height={`64`}
                  alt="SearchLogo"
                />
                search
              </a>
            </li>
            <li className="navLink">
              <a href="#">
                <img
                  src={FeedsLogo}
                  width={`64`} height={`64`}
                  alt="FeedsLogo"
                />
                feeds
              </a>
            </li>
            <li className="navLink">
              <a href="#">
                <img
                  src={NotificationsLogo}
                  width={`64`} height={`64`}
                  alt="NotificationsLogo"
                />
                notifications
              </a>
            </li>
            <li className="navLink">
              <a href="#">
                <img
                  src={ModerationLogo}
                  width={`64`} height={`64`}
                  alt="ModerationLogo"
                />
                moderation
              </a>
            </li>
            <li className="navLink">
              <a href="#">
                <img
                  src={ProfileLogo}
                  width={`64`} height={`64`}
                  alt="ProfileLogo"
                />
                profile
              </a>
            </li>
            <li className="navLink">
              <a href="#">
                <img
                  src={SettingsLogo}
                  width={`64`} height={`64`}
                  alt="SettingsLogo"
                />
                settings
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <img
          src={CoverImage}
          width={300} height={100}
          alt="CoverImage"
        />
        <img
          src={Logo}
          width={80} height={80}
          alt="Logo"
        />
        <h1>Danay Shpala</h1>
        <p>@shpdanay.git</p>
        <ul>
          <li><a href="">10 followers</a></li>
          <li><a href="">52 following</a></li>
          <li>0 posts</li>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate doloremque dolorum eveniet excepturi illo, in ipsum magnam modi nam odio officia quidem ratione rem sunt unde vel velit, vitae?</p>

          <ul>
            <li>
              <button type={"button"}>Posts</button>
            </li>
            <li>
              <button type={"button"}>Posts & replies</button>
            </li>
            <li>
              <button type={"button"}>Media</button>
            </li>
          </ul>
        </ul>

        <section>
          <p>No posts yet!</p>
        </section>
        <section hidden>
          <p>No posts & replies yet!</p>
        </section>
        <section hidden>
          <p>No media yet!</p>
        </section>
      </main>
    </>
  )
}
