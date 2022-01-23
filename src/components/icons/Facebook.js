import * as React from 'react';
import Svg, {Defs, Pattern, Image, Rect} from 'react-native-svg';

function SvgFacebook(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 50.59 39.443"
      {...props}>
      <Defs>
        <Pattern
          id="facebook_svg__a"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          viewBox="0 0 225 225">
          <Image
            width={225}
            height={225}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///87WZgpTZI0VJXKz985V5cmS5H6+/3Z3uotUJN7jbZHY58yU5VQaaGuuNGyutG5wtcdRo+TosNtgK6Zp8bP1OL19vnBydxgdqnf4+7r7fROaKF9j7eOncCmsc2GlLlkealyhLBuga3d4ewXQ40ANohxfvtpAAADaUlEQVR4nO3cW3PaMBCGYR+QiMAcDLEDJgGSpv//L5Z4SkMHra1a7qxWfM9terHvOLViS5AkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKNrmoZ7hP+h3r8c37aL9LMstdZlWRbz8+m4fuKeaxz71WlndGaKXKXfVF4YfZhyD+evWe5MVqjbtpvKHfd43qqtMUTdl/zMPaCn/VYXdJ78wnpj8q68r8It95A+moPpvH5t4Tv3lB6qsrcvTYsZ95jDLXV/3+UavnLPOdgqc7iCl2t44h50qEo7BcotrPvvMb8L37hHHei9cAtMiw33qMNMMsfA1DxzzzrI9OD4O3opPHIPO8ja+RJKLZw7X8LUrLiHHaJyWuslF876/ty+kb1wTztA7bpSiC10XyoudMU97gCn7muoUnVDZOGu406qTJbP54tvc4Hv2pqOQL14rpqmnt7gHneAivxvmCuJt5V7S0MFLmru2cbxRtxoVBrLq3xqvTdL7snGciYKlcSbitXCfi8V/drwL1OiUOijrsWUeHQS+iBogUL5yMJoFguyUOTDvA0K5UOhfCiUjyxcc082FqowQ6EYKJQv/kJq81DkFkyyf5/dS6ljlq+XH25ay9akFfY71Ernd8ijiKr9acu0sgtd7rkjOtEv8N2Ffg19+9SBu6Gbf2Hox0tfvH9LQz/05V8Y+hPHitpIc5ZNuBu6+RfqsBcLejPUWcmd0OPoW6jm3Ak9vAtDXyySZ9/C4M/PehcGv5lBHUpwFvpi4V+oQz+e0XOCrZcqwn6yGKFwEfr5jNd/OCprk39wF/SZeV7D0J8s/AvD39vfev6WBr9YJB++hYE/WSTJTmdX5g8qJ8/umNCXw6SaXK2XV9Rf4/np+19fVaEvFlYN8XYq/LuKq/gL65IoDPydkzsUyvcAhcRnnB+gMJo9YKownl3u+AunxB5wRIX2QBQKQhaKPG1i8wCFUZ0YskGhfGRh8O/VXFGfzkOhHI9bqKMppL40IhP49RAEFMoXfyHxjQMRFRKbivoH92CjoQqD3yt0hkL5iOMLMRXGfw2JwuD37J3FX0gcdkOhIA9bWIZ+lNRd/IXE0WgUCkIVijzDZkUVcs81HuJjJigUJP7Czae2+ck913iaJzvuuQAAAAAAAAAAAAAAAAAAAAAAAAAAAECiX9R9M5ebSr/7AAAAAElFTkSuQmCC"
          />
        </Pattern>
      </Defs>
      <Rect
        width={50.59}
        height={39.443}
        rx={11}
        fill="url(#facebook_svg__a)"
      />
    </Svg>
  );
}

export default SvgFacebook;
