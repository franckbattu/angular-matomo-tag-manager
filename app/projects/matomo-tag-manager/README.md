# Matomo Tag Manager for Angular

Simple integration of Matomo Tag Manager with Angular (>= 11).

## Getting started

### Installing

Simple execute <code>npm install angular-matomo-tag-manager</code> or <code>yarn add angular-matomo-tag-manager</code>

### Quick Start
Don't forget to configure first your container in Matomo.

```
// In module

import { MatomoTagManagerModule } from 'angular-matomo-tag-manager';


imports: [
  MatomoTagManagerModule.forRoot({
    containerId: CONTAINER_ID,
    host: MATOMO_HOST
  })
]
```

Then, you can use by injecting service in any controllers :

```
import { MatomoTagManagerService } from 'angular-matomo-tag-manager';

contructor(private service: MatomoTagManagerService) { }
```

Send tag via **sendTag** method :
```
this.service.sendTag({
  event: 'TrackView' // event field required
  page: {
    title: '...'
  }
})
```

A tag is a type of MatomoTag:
```
interface MatomoTag {
    event: string;
    [key: string]: any;
}
```