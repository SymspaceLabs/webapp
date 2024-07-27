import Image from "next/image";
import { Box, Container, Typography } from '@mui/material';
import DOMPurify from 'dompurify';

export default function Section1({ article }) {

  const sanitizedContent = DOMPurify.sanitize(article.content);

  
  return <Box sx={{height:'75vh'}}>
      <Container maxWidth="md">
          <Box sx={{ py: 4 }}>
            <Typography sx={{ fontFamily: 'Helvetica' }} variant="h4" component="h1" gutterBottom>
              {article.title}
            </Typography>
            <Typography sx={{pb:2}} variant="body1" component="div">
              By {article.author}
            </Typography>
            <Image 
              src={article.image}
              alt="Article Banner" 
              layout="responsive"
              width={700}
              height={400}
              style={{ borderRadius: '8px' }}
            />
          </Box>
          {/* <Typography variant="body1" component="div">
            {article.content}
          </Typography> */}
          <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </Container>
    </Box>;
}