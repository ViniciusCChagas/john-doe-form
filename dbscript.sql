--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: johndoeform; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE johndoeform WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'pt_BR.UTF-8';


ALTER DATABASE johndoeform OWNER TO postgres;

\connect johndoeform

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: client_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.client_id_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client (
    id integer DEFAULT nextval('public.client_id_seq'::regclass) NOT NULL,
    name character varying(255) NOT NULL,
    cpf character varying(30) NOT NULL,
    email character varying(255),
    "favoriteColorId" integer NOT NULL,
    comments character varying(800) NOT NULL
);


ALTER TABLE public.client OWNER TO postgres;

--
-- Name: color_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.color_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.color_id_seq OWNER TO postgres;

--
-- Name: colors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.colors (
    id integer DEFAULT nextval('public.color_id_seq'::regclass) NOT NULL,
    name character varying(255) NOT NULL,
    hex character varying(7)
);


ALTER TABLE public.colors OWNER TO postgres;

--
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: colors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.colors VALUES (1, 'Vermelho', '#FF0000');
INSERT INTO public.colors VALUES (5, 'Indigo', '#2E2B5F');
INSERT INTO public.colors VALUES (2, 'Laranja', '#FF7F00');
INSERT INTO public.colors VALUES (4, 'Azul', '#0000FF');
INSERT INTO public.colors VALUES (3, 'Amarelo', '#FFFF00');
INSERT INTO public.colors VALUES (6, 'Violeta', '#8B00FF');


--
-- Name: client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_id_seq', 6, true);


--
-- Name: color_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.color_id_seq', 6, true);


--
-- Name: client client_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pk PRIMARY KEY (id);


--
-- Name: colors colors_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colors
    ADD CONSTRAINT colors_pk PRIMARY KEY (id);


--
-- Name: client client_colors_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_colors_id_fk FOREIGN KEY ("favoriteColorId") REFERENCES public.colors(id);


--
-- PostgreSQL database dump complete
--
