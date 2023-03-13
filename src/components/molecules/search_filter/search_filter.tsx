import { Box } from '@components/atoms/containers/box';
import { Flex } from '@components/atoms/containers/flex';
import { Button } from '@components/atoms/forms/button';
import { Input } from '@components/atoms/forms/input';
import { useDebounce } from '@hooks/use_debounce';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const debouceDelay = 500;

export const SearchFilter = observer(
  ({ onChange }: { onChange: (value: string) => void }): React.ReactElement => {
    const [searchParams] = useSearchParams();

    const filterParam = searchParams.get('filter');

    const [filter, setFilter] = React.useState(filterParam || '');

    const navigate = useNavigate();

    const debouncedFilter = useDebounce(filter, debouceDelay);

    const inputFilterRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      onChange(debouncedFilter);

      navigate(`/questions?filter=${debouncedFilter}`);
    }, [debouncedFilter]);

    React.useEffect(() => {
      if (inputFilterRef.current && inputFilterRef.current.value === '') {
        inputFilterRef.current.focus();
      }
    }, []);

    return (
      <Flex
        size="full"
        direction="row"
        align="center"
        justify="center"
        mx="md"
        my="md"
      >
        <Box
          mx="md"
          flex="4"
        >
          <Input
            ref={inputFilterRef}
            placeholder="Search..."
            value={filter}
            onChange={(event) => {
              setFilter(event.currentTarget.value);
            }}
          />
        </Box>

        <Box flex="1">
          <Button
            size="md"
            color="blue"
            onClick={() => {
              setFilter('');
            }}
          >
            Clear
          </Button>
        </Box>
      </Flex>
    );
  },
);
