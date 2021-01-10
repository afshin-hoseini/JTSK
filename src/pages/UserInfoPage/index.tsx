import { InfoForm } from 'src/features/InfoForm';
import './style.css';

/**
 * Layouts user information page including the pertaining form.
 */
export default function UserInfoPage() {
  return (
    <article className="user-info-page">
      <InfoForm className="user-info-page__form" />
    </article>
  );
}
