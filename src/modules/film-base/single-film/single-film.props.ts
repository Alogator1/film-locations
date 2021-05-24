import { Film, Location } from '@api';
import { setMapCenter } from '@home-page/store';
import { navigate } from '@store/router';
import { useDispatch } from 'react-redux';

type SingleFilmProps = {
  film: Film;
};

export { SingleFilmProps };
