--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.4
-- Dumped by pg_dump version 9.4.4
-- Started on 2015-07-09 10:13:09 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

DROP DATABASE "CDR";
--
-- TOC entry 2048 (class 1262 OID 16386)
-- Name: CDR; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE "CDR" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


\connect "CDR"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 2049 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 175 (class 3079 OID 11895)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2051 (class 0 OID 0)
-- Dependencies: 175
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 172 (class 1259 OID 16387)
-- Name: call_records; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE call_records (
    caller character varying,
    callee character varying,
    start_date date,
    duration integer
);


--
-- TOC entry 173 (class 1259 OID 16393)
-- Name: user; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE "user" (
    name character varying,
    "phoneNumber" character varying,
    email character varying,
    role character varying,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    "deletedAt" timestamp without time zone,
    id integer NOT NULL
);


--
-- TOC entry 2052 (class 0 OID 0)
-- Dependencies: 173
-- Name: COLUMN "user"."phoneNumber"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN "user"."phoneNumber" IS '	
';


--
-- TOC entry 174 (class 1259 OID 16401)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2053 (class 0 OID 0)
-- Dependencies: 174
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE user_id_seq OWNED BY "user".id;


--
-- TOC entry 1925 (class 2604 OID 16403)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- TOC entry 2041 (class 0 OID 16387)
-- Dependencies: 172
-- Data for Name: call_records; Type: TABLE DATA; Schema: public; Owner: -
--

COPY call_records (caller, callee, start_date, duration) FROM stdin;
+36307866688	+36705357767	2015-07-07	132
+36705357767	+36207656543	2015-07-07	30
\.


--
-- TOC entry 2042 (class 0 OID 16393)
-- Dependencies: 173
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "user" (name, "phoneNumber", email, role, "createdAt", "updatedAt", "deletedAt", id) FROM stdin;
Arpad Budai	+36705357768	budaiarpad@gmail.com	user	2015-07-08 15:27:49	2015-07-08 15:27:49	\N	13
Operator	operator	operator	operator	\N	\N	\N	14
operator	+36705357767	die2000@gmail.com	user	2015-07-07 17:27:59	2015-07-08 12:53:15	\N	9
NewUser	+36305553344	new@gmail.com	user	2015-07-07 15:49:46	2015-07-08 12:54:47	\N	1
Fake User	+36705357769	news@gmail.com	user	2015-07-09 07:59:12	2015-07-09 07:59:12	\N	20
Fake User	+36705357770	new2@gmail.com	user	2015-07-09 08:00:59	2015-07-09 08:00:59	\N	21
\.


--
-- TOC entry 2054 (class 0 OID 0)
-- Dependencies: 174
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('user_id_seq', 21, true);


--
-- TOC entry 1927 (class 2606 OID 16414)
-- Name: email; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT email UNIQUE (email);


--
-- TOC entry 1929 (class 2606 OID 16412)
-- Name: id; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT id PRIMARY KEY (id);


--
-- TOC entry 1931 (class 2606 OID 16416)
-- Name: phoneNumber; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT "phoneNumber" UNIQUE ("phoneNumber");


--
-- TOC entry 2050 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: -
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2015-07-09 10:13:09 CEST

--
-- PostgreSQL database dump complete
--

