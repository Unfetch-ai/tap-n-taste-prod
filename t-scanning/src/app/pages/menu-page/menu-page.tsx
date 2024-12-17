import { Box } from '@mui/material';
import {
  TCategory,
  TCustomCard,
  TopNav,
  TSearchbar,
  TViewBar,
} from '@tap-n-taste/ui';
import FooterPage from '../footer-page/footer-page';
import CuisinesOffered from './cuisines-offered/cuisines-offered';
import { ItemInfoPage } from './item-info/item-info';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import BottomInfoPopUp from './bottom-info-popup/bottom-info-popup';
import { menuCardData } from '../../constants/MenuPageData';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MenuPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="px-[8%] sm:px-[10%]">
      <TopNav />
      <TSearchbar />

      <TCategory />

      <CuisinesOffered />

      <Box className="mt-10 mb-10">
        {menuCardData.map((item, index) => (
          <TCustomCard
            onClick={handleClickOpen}
            image={item.image}
            title={item.title}
            description={item.description}
            rating={item.rating}
            price={item.price}
            veg={false}
          />
        ))}
      </Box>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="rounded-2xl"
      >
        <ItemInfoPage
          itemName="Burger"
          itemDesc="Succulent grilled chicken patty nestled between toasted buns, crowned with crisp lettuce and tangy mayo, delivering savory satisfaction in every bite."
          itemPrice={234.9}
          itemVeg={false}
          ratings={3}
        />
      </Dialog>

      <BottomInfoPopUp />

      <FooterPage />
    </Box>
  );
};

export default MenuPage;